import Joi from "joi";
export const newAdminUserValidaton = (req, res, next) => {
  try {
    const schema = Joi.object({
      firstName: Joi.string().max(20).required(),
      lastName: Joi.string().max(20).required(),
      email: Joi.string().email({ minDomainSegments: 2 }).max(50).required(),
      phone: Joi.string().max(10).required(),
      dob: Joi.date().allow("", null),
      address: Joi.string().max(100).allow("", null),
      password: Joi.string().max(100),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      (error.status = 200), next(error);
    }
    next();
  } catch (error) {
    next(error);
  }
};
