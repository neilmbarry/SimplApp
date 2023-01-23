const mongoose = require("mongoose");
const fs = require("fs");
// const path = require('path');
const dotenv = require("dotenv");
const Product = require("../models/productModel");
const Review = require("../models/reviewModel");
const User = require("../models/userModel");

dotenv.config({ path: `${__dirname}/../config.env` });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose.set("strictQuery", false);

mongoose.connect(DB).then(() => {
  console.log("Connected to MongoDB");
});

// const users = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/dummyUsers.json`),
//   'utf-8'
// );

// const cocktails = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/dummyCocktails.json`),
//   'utf-8'
// );

// const addData = async () => {
//   try {
//     console.log('Importing cocktails...');
//     await Cocktail.create(cocktails);
//     console.log('Cocktails imported!');
//     console.log('Importing users...');
//     await User.create(users);
//     console.log('Users imported!');
//     process.exit(1);
//   } catch (err) {
//     console.log(err);
//     process.exit(1);
//   }
// };

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

// const resetData = async () => {
//   try {
//     console.log('Deleting data...');

//     await Cocktail.deleteMany();
//     await User.deleteMany();
//     console.log('Data deleted!');
//     console.log('Importing data...');
//     await Cocktail.create(cocktails, {
//       validateBeforeSave: false,
//     });
//     await User.create(users);
//     console.log('Data imported!');
//     process.exit(1);
//   } catch (err) {
//     console.log(err);
//     process.exit(1);
//   }
// };

// if (process.argv[2] === '--import') {
//   addData();
// }

if (process.argv[2] === "--deleteReviews") {
  deleteReviews();
}
if (process.argv[2] === "--deleteUsers") {
  deleteUsers();
}
if (process.argv[2] === "--deleteProducts") {
  deleteProducts();
}

// if (process.argv[2] === '--reset') {
//   resetData();
// }
