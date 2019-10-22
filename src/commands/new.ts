import { Command, flags } from "@oclif/command";
import { toUnicode } from "punycode";
const inquirer = require("inquirer");
const chalk = require("chalk");
const { Logs } = require("../storage");
const axios = require("axios");
const userName = require("git-user-name");

export default class New extends Command {
  static description = "Logs a new entry for this  project";

  static flags = {
    help: flags.help({ char: "h" })
  };

  questions = [
    {
      type: "input",
      name: "task",
      message: chalk.yellow(
        `💪 ${" "}Impressive progress so far. What did you just work on?`
      )
    },
    {
      type: "input",
      name: "isCompleted",
      message: chalk.green(
        `✅ ${" "}Awesome. Is it completed and ready for testing?`
      )
    },
    {
      type: "input",
      name: "extra",
      message: chalk.magenta(`👁️ ${" "}Anything else you'd like to log?`)
    }
  ];

  async run() {
    // const { args, flags } = this.parse(New);

    await inquirer
      .prompt(this.questions)
      .then(async ({ task, isCompleted, extra }: { [x: string]: any }) => {
        // console.log(`Hi ${what}!`);
        const response = await Logs.push({
          id: Logs.value().length,
          task,
          isCompleted,
          extra
        }).write();
        return response;
      })
      .then(async (entries: any[]) => {
        let entry = entries[entries.length - 1];
        let { task, isCompleted, extra } = entry;
        let text = `
Updates from ${userName()} 

What did you just work on?
${task}

Is it completed and ready for testing?
${isCompleted}

Anything else you'd like to log?
${extra}`;

        await axios
          .post(
            "https://hooks.slack.com/services/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",
            { text: "```" + text + "```" }
          )
          .then(() => {
            this.log(
              chalk.green("Your log has been saved and sent successfully!")
            );
          })
          .catch(() => {
            this.log(
              chalk.red(
                "Something went wrong with submitting yur log. Please check your internet connection and try again."
              )
            );
          });
      });
  }
}
