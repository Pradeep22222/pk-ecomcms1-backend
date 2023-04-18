import express from "express";
import { insertAdminUser } from "../model/adminUser/AdminUserModel.js";
const router = express.Router();
router.post("/", async (req, res, next) => {
    try {
        const result = await insertAdminUser(req.body);
        res.json({
            status: "success",
            message:"new admin has been registered"
        })
    } catch (error) {
        next(error)
    }
})


export default router;