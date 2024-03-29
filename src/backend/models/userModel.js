const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, "A user must have a username."],
      unique: [true, "This username is already in use."],
    },
    firstName: {
      type: String,
      required: [true, "A user must have a first name."],
    },
    lastName: {
      type: String,
      required: [true, "A user must have a last name."],
    },
    about: {
      type: String,
    },
    trips: {
      type: Number,
      default: 0,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
      required: [true, "A user must have a role."],
    },
    password: {
      type: String,
      required: [true, "A user must have a password."],
      minlength: [8, "A user password must be at least 8 characters long."],
      select: false,
    },
    faves: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
      },
    ],
    submissions: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
      },
    ],
    joined: {
      type: Date,
      default: Date.now(),
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
    image: String,
    superHost: {
      type: Boolean,
      default: false,
    },
    ratingsQuantity: Number,
    ratingsAverage: Number,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.virtual("reviews", {
  ref: "Review",
  foreignField: "host",
  localField: "_id",
});

userSchema.virtual("hostProducts", {
  ref: "Product",
  foreignField: "host",
  localField: "_id",
});



userSchema.methods.isCorrectPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.tokenExpired = function () {
  if (!this.passwordResetExpires) return;
  return this.passwordResetExpires.getTime() < Date.now();
};

const User = mongoose.model("User", userSchema);

module.exports = User;
