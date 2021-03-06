class DevService {
  constructor({ devDao }) {
    this.devDao = devDao;
  }

  getDev(id) {
    return this.devDao.getDev(id);
  }

  createDev({ firstname, lastname, email, hobbies }) {
    return this.devDao.createDev(email, firstname, lastname, hobbies);
  }

  getDevByEmail(email) {
    return this.devDao.getDevByEmail(email);
  }

  listDevs() {
    return this.devDao.listDev();
  }
}

module.exports = DevService;
