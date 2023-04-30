import express from "express";
const router = express.Router();
router.post("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "categories added",
    });
  } catch (error) {
    next();
  }
});
export default router;
