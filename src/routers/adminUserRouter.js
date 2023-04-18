import express from "express";
import { insertAdminUser } from "../model/adminUser/AdminUserModel.js";
import { newAdminUserValidaton } from "../middlewares/joivalidation/adminUserValidation.js";
import { encryptPassword } from "../helpers/bcryptHelper.js";
const router = express.Router();
router.post("/", newAdminUserValidaton, async (req, res, next) => {
  try {
      const { password } = req.body;
      console.log(password);
    req.body.password = encryptPassword(password);
    const result = await insertAdminUser(req.body);
    res.json({
      status: "success",
      message: "new admin has been registered",
    });
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

export default router;
