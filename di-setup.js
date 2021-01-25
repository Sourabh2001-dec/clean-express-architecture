const awilix = require("awilix");
const DevController = require("./controller/dev");
const DevDao = require("./dao/dev");
const db = require("./db");
const DevService = require("./service/dev");

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

function setup() {
  container.register({
    // Controllers
    devController: awilix.asClass(DevController),

    // Services
    devService: awilix.asClass(DevService),

    // Data Access Objects
    devDao: awilix.asClass(DevDao),

    //db
    db: awilix.asClass(db).singleton(),
  });
}

module.exports = {
  container,
  setup,
};
