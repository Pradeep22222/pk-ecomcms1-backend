import express from "express";
import { v4 as uuidv4 } from "uuid";
import { insertAdminUser } from "../model/adminUser/AdminUserModel.js";
import {
  emailVerificationValidation,
  newAdminUserValidaton,
} from "../middlewares/joivalidation/adminUserValidation.js";
import { comparePassword, encryptPassword } from "../helpers/bcryptHelper.js";
import { verificationEmail } from "../helpers/emailHelper.js";
const router = express.Router();
router.post("/", newAdminUserValidaton, async (req, res, next) => {
  try {
    const { password } = req.body;
    console.log(password);
    req.body.password = encryptPassword(password);
    req.body.emailValidationCode = uuidv4();
    const user = await insertAdminUser(req.body);
    if (user?._id) {
      res.json({
        status: "success",
        message:
          "We have sent you an email to confirm your account, please check your email including the junk folder",
      });
      const url = `${process.env.ROOT_DOMAIN}/admin/verify-email?c=${user.emailValidationCode}&e=${user.email}`;
      verificationEmail({ firstName: user.firstName, email: user.email, url });
    } else {
      res.json({
        status: "error",
        message: "unable to create new admin user, try again later",
      });
    }
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      res.json({
        status: "error",
        message:
          "Another user is already registered witht the email address you provided",
      });
    }
    next(error);
  }
});
router
router.post(
  "/login",
  emailVerificationValidation,
  async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await findOneAdminUser({ email });
      if (user?._id) {
        if (user.status !== "active") {
          return res.json({
            status: "error",
            message:
              "Your account has not been verified yet, please check your email and verify your account.",
          });
        }
        const isMatched = comparePassword(password, user.password);
        if (isMatched) {
          user.password = undefined;
          res.json({
            status: "success",
            message: "logged in successfully",
          });
        }
      }
      res.json({
        status: "success",
        message: "you can login now",
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
