const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ logs: [] }).write();
const Logs = db.get("logs");

module.exports = {
  db,
  Logs
};
