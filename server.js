const express = require("express");
const { setup } = require("./di-setup");
const apiErrorHandler = require("./error/apiErrorHandler");

setup();
const router = require("./routes");

class Server {
  constructor() {
    this.app = express();
    this.setup();
  }

  setup() {
    this.app.use(express.json());
    this.app.use("/", router);
    this.app.use(apiErrorHandler);
  }

  run(port) {
    this.server = this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }

  stop(done) {
    this.server.close(done);
  }
}

module.exports = Server;
