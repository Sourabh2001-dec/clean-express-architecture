const errors = require("restify-errors");
class DevController {
  constructor({ devService }) {
    this.devService = devService;

    this.createDev = this.createDev.bind(this);
    this.getDev = this.getDev.bind(this);
    // this.getDevByEmails = this.getDevByEmails.bind(this);
    this.getDevByEmail = this.getDevByEmail.bind(this);
    this.listDevs = this.listDevs.bind(this);
  }

  async createDev(req, res, next) {
    try {
      const result = await this.devService.createDev(req.body);
      res.status(201).json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

  async getDev(req, res, next) {
    try {
      const developerId = req.params.id;
      const developer = await this.devService.getDev(req.params.id);
      if (developer == null) {
        next(
          errors.NotFoundError(`developer with id ${developerId} not found`)
        );
        return;
      }
      res.json(developer);
    } catch (err) {
      next(err);
    }
  }

  async listDevs(req, res, next) {
    try {
      const devs = await this.devService.listDevs();
      res.json(devs);
    } catch (error) {
      next(error);
    }
  }

  async getDevByEmail(req, res, next) {
    try {
      const dev = await this.devService.getDevByEmail(req.body.email);
      res.json(dev);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = DevController;
