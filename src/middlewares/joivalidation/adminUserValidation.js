import Joi from "joi";
import {
  ADDRESS,
  DATE,
  EMAIL,
  FIRSTNAME,
  LASTNAME,
  PASSWORD,
  PHONE,
  SHORTSTR,
} from "./constant.js";
export const newAdminUserValidaton = (req, res, next) => {
  try {
    const schema = Joi.object({
      firstName: FIRSTNAME.required(),
      lastName: LASTNAME.required(),
      email: EMAIL.required(),
      phone: PHONE.required(),
      dob: DATE,
      address: ADDRESS,
      password: PASSWORD.required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      error.status = 200;
      return next(error);
    }
    next();
  } catch (error) {
    next(error);
  }
};
export const emailVerificationValidation = (req, res, next) => {
  try {
    const schema = Joi.object({
      email: EMAIL.required(),
      emailValidationCode: SHORTSTR.required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      error.status = 200;
      return next(error);
    }
    next();
  } catch (error) {
    next(error);
  }
};
export const loginValidation = (req, res, next) => {
  try {
    const schema = Joi.object({
      email: EMAIL.required(),
      password: PASSWORD.required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      error.status = 200;
      return next(error);
    }
    next();
  } catch (error) {
    next(error);
  }
};
