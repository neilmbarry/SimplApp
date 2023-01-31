const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

const origin =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://simp-app.vercel.app";

app.use(
  cors({
    origin,
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use((req, res, next) => {
  req.requestedAt = new Date().toString();
  next();
});

app.use("/api/v1/products", productRouter);

app.use("/api/v1/users", userRouter);

app.use("/api/v1/reviews", reviewRouter);

app.all("*", (req, res, next) => {
  const error = new AppError(
    `Could not find ${req.originalUrl} on this route`,
    400
  );
  next(error);
});

app.use(globalErrorHandler);

console.log("App running");

module.exports = app;
