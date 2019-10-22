codelogs
========

A tool to help monitor and manage progress during development.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/codelogs.svg)](https://npmjs.org/package/codelogs)
[![Downloads/week](https://img.shields.io/npm/dw/codelogs.svg)](https://npmjs.org/package/codelogs)
[![License](https://img.shields.io/npm/l/codelogs.svg)](https://github.com/worldclassdev/codelogs/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g codelogs
$ codelogs COMMAND
running command...
$ codelogs (-v|--version|version)
codelogs/0.0.2 darwin-x64 node-v12.10.0
$ codelogs --help [COMMAND]
USAGE
  $ codelogs COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`codelogs help [COMMAND]`](#codelogs-help-command)
* [`codelogs new`](#codelogs-new)

## `codelogs help [COMMAND]`

display help for codelogs

```
USAGE
  $ codelogs help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_

## `codelogs new`

Logs a new entry for this  project

```
USAGE
  $ codelogs new

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/new.ts](https://github.com/worldclassdev/codelogs/blob/v0.0.2/src/commands/new.ts)_
<!-- commandsstop -->
