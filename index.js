const Server = require("./server");
const config = require("./config/config");

const server = new Server();
console.log(config.get("port"));
server.run(config.get("port"));
