const Server = require("./server");
const config = require("./config/config");

const server = new Server();
server.run(config.get("port"));
