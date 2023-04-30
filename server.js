import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import { dbConnection } from "./src/config/dbConfig.js";
const app = express();
const PORT = process.env.PORT || 8000;
dbConnection();
// middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());

// api end points
import adminUserRouter from "./src/routers/adminUserRouter.js";

app.use("/api/v1/admin-user", adminUserRouter);
import categoriesRouter from "./src/routers/categoriesRouter.js";
app.use("/api/v1/categories", categoriesRouter);

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
