const mongoose = require("mongoose");
const fs = require("fs");
// const path = require('path');
const dotenv = require("dotenv");
const Product = require("../models/productModel");
const Review = require("../models/reviewModel");
const User = require("../models/userModel");

dotenv.config({ path: `${__dirname}/../../../config.env` });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose.set("strictQuery", false);

mongoose.connect(DB).then(() => {
  console.log("Connected to MongoDB");
});

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/dummyUsers.json`),
  "utf-8"
);

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/dummyProducts.json`),
  "utf-8"
);
const reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/dummyReviews.json`),
  "utf-8"
);

const addData = async () => {
  try {
    console.log("Importing products...");
    await Product.create(products);
    console.log("Products imported!");
    console.log("Importing users...");
    await User.create(users);
    console.log("Users imported!");
    console.log("Importing reviews...");
    await Review.create(reviews);
    console.log("Reviews imported!");
    process.exit(1);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const addUsers = async () => {
  try {
    console.log("Importing users...");
    await User.create(users);
    console.log("Users imported!");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const addProducts = async () => {
  try {
    console.log("Importing products...");
    await Product.create(products);
    console.log("Products imported!");
    process.exit(1);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const addReviews = async () => {
  try {
    console.log("Importing reviews...");
    await Review.create(reviews);
    console.log("Reviews imported!");
    process.exit(1);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const deleteUsers = async () => {
  try {
    console.log("Deleting users...");
    await User.deleteMany();
    console.log("Users deleted!");
    process.exit(1);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
const deleteProducts = async () => {
  try {
    console.log("Deleting products...");

    await Product.deleteMany();
    console.log("Products deleted!");
    process.exit(1);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
const deleteReviews = async () => {
  try {
    console.log("Deleting reviews...");
    await Review.deleteMany();
    console.log("Reviews deleted!");
    process.exit(1);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const deleteAll = async () => {
  try {
    console.log("Deleting data...");
    await Product.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();
    console.log("Data deleted!");
    process.exit(1);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const resetData = async () => {
  try {
    console.log("Deleting data...");
    await Product.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();
    console.log("Data deleted!");
    console.log("Importing data...");
    await Product.create(products, {
      validateBeforeSave: false,
    });
    await User.create(users);
    await Review.create(reviews);
    console.log("Data imported!");
    process.exit(1);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

if (process.argv[2] === "--import") {
  addData();
}

if (process.argv[2] === "--deleteReviews") {
  deleteReviews();
}
if (process.argv[2] === "--deleteUsers") {
  deleteUsers();
}
if (process.argv[2] === "--deleteProducts") {
  deleteProducts();
}

if (process.argv[2] === "--reset") {
  resetData();
}
if (process.argv[2] === "--deleteAll") {
  deleteAll();
}
