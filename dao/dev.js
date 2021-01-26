const errors = require("restify-errors");
class DevDao {
  constructor({ db }) {
    // here the db can be a model for mongodb
    this.db = db;
  }

  async createDev(email, firstname, lastname, hobbies) {
    try {
      const id = await this.db.create({
        email,
        firstname,
        lastname,
        hobbies,
      });
      return id;
    } catch (error) {
      throw new errors.InternalServerError("Internal Server Error");
    }
  }

  async getDev(id) {
    const dev = await this.db.findOne({ id });
    if (!dev || dev === null) {
      throw new errors.NotFoundError("Dev not found!");
    }
    return dev;
  }

  async listDev() {
    const devs = await this.db.list();
    return devs;
  }

  async getDevByEmail(email) {
    const dev = await this.db.findOne({ email });
    if (!dev || dev === null) {
      throw new errors.NotFoundError("Dev not found!");
    }
    return dev;
  }
}

module.exports = DevDao;
