const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const app = require("./app");

console.log(process.env);

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.set("strictQuery", false);

mongoose.connect(DB).then(() => {
  console.log("Connected to MongoDB");
});

const server = app.listen(process.env.PORT || 8000, () => {
  console.log(`Starting ${process.env.NODE_ENV.toUpperCase()} server...`);
  console.log(`Listening on port ${process.env.PORT}...`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDED REJECTION (Promise) 🚨 Shutting down...");
  console.log(err.name, err.message);
  console.log(err);

  server.close(() => {
    process.exit(1);
  });
});