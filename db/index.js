const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

class db {
  constructor() {
    this.dbData;
    this.loadDb = this.loadDb.bind(this);
    this.dbPath = path.join(__dirname, "./db.json");
    this.loadDb();
  }

  loadDb() {
    this.dbData = fs.readFileSync(this.dbPath);
    this.dbData = JSON.parse(this.dbData);
  }

  saveDb() {
    fs.writeFileSync(this.dbPath, JSON.stringify(this.dbData));
  }

  create(data) {
    let id = uuidv4();
    data["id"] = id;
    this.dbData.data.push(data);
    this.saveDb();
    return data;
  }

  findOne(query) {
    let result = null;
    result = this.dbData.data.find((element) => {
      let isEqual = true;
      Object.keys(query).forEach((key) => {
        if (isEqual && query[key] !== element[key]) {
          isEqual = false;
        }
      });
      return isEqual;
    });
    return result;
  }

  list() {
    return this.dbData.data;
  }
}

module.exports = db;
