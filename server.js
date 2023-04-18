import express from "express";
import helmet from "helmet";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 8000;
// middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());

// api end points
import adminUserRouter from "./routers/adminUserRouter.js"
app.use("/api/v1/admin-user", adminUserRouter);

// universal error handling
app.use("/", (error, req, res, next) => {
  const statusCode = error.status || 404;
  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`application running on  port ${PORT}`);
});
