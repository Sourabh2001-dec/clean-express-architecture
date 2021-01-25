const convict = require("convict");

const config = convict({
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 8080,
    env: "PORT",
    arg: "port",
  },
});

config.validate({ allowed: "strict" });

module.exports = config;
