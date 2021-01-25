const joi = require("joi");

module.exports = joi.object({
  email: joi.string().email().required(),
  firstname: joi.string().min(1).required(),
  lastname: joi.string().min(1).required(),
  hobbies: joi.array().items(joi.string().min(1).required()).min(1).required(),
});
