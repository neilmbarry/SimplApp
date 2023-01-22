const mongoose = require('mongoose');
const fs = require('fs');
// const path = require('path');
const dotenv = require('dotenv');
const Cocktail = require('../models/cocktailModel');
const User = require('../models/userModel');

dotenv.config({ path: `${__dirname}/../config.env` });

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log('Connected to MongoDB');
});

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/dummyUsers.json`),
  'utf-8'
);

const cocktails = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/dummyCocktails.json`),
  'utf-8'
);

const addData = async () => {
  try {
    console.log('Importing cocktails...');
    await Cocktail.create(cocktails);
    console.log('Cocktails imported!');
    console.log('Importing users...');
    await User.create(users);
    console.log('Users imported!');
    process.exit(1);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    console.log('Deleting data...');
    await Cocktail.deleteMany();
    await User.deleteMany();
    console.log('Data deleted!');
    process.exit(1);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const resetData = async () => {
  try {
    console.log('Deleting data...');

    await Cocktail.deleteMany();
    await User.deleteMany();
    console.log('Data deleted!');
    console.log('Importing data...');
    await Cocktail.create(cocktails, {
      validateBeforeSave: false,
    });
    await User.create(users);
    console.log('Data imported!');
    process.exit(1);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

if (process.argv[2] === '--import') {
  addData();
}

if (process.argv[2] === '--delete') {
  deleteData();
}

if (process.argv[2] === '--reset') {
  resetData();
}
