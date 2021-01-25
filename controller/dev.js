const errors = require("restify-errors");
class DevController {
  constructor({ devService }) {
    this.devService = devService;

    this.createDev = this.createDev.bind(this);
    this.getDev = this.getDev.bind(this);
    // this.getDevByNames = this.getDevByNames.bind(this);
    // this.listDevs = this.listDevs.bind(this);
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
}

module.exports = DevController;
