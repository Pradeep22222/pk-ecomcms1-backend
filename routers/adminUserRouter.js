import express from "express";
const router = express.Router();
router.post("/", (req, res, next) => {
    try {
        res.json({
            status: "success",
            message:"new admin has been registered"
        })
    } catch (error) {
        next(error)
    }
})


export default router;