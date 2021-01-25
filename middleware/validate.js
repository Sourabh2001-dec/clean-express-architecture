const errors = require("restify-errors");

function validate(schema) {
  return (req, res, next) => {
    const { value, error } = schema.validate(req.body);
    if (error) {
      next(new errors.BadRequestError(error.message));
      return;
    }

    // replace request body with validated value
    // because then we have applied defaults
    req.body = value;
    next();
  };
}

module.exports = validate;
