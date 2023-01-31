const mongoose = require("mongoose");
const Product = require("./productModel");
const User = require("./userModel");

const reviewSchema = mongoose.Schema({
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: [true, "A review must have a rating."],
  },
  summary: {
    type: String,
    maxlength: [800, "A review must have no more than 800 characters."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "A review must have an user."],
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
  },
  host: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

reviewSchema.pre(/^find/, async function (next) {
  this.populate({
    path: "user",
    select: "firstName lastName image",
  });
  next();
});

reviewSchema.statics.calcProdAverages = async function (prodId) {
  if (!prodId) return;
  try {
    const stats = await this.aggregate([
      {
        $match: { product: prodId },
      },
      {
        $group: {
          _id: "$product",
          ratingsQuantity: { $sum: 1 },
          ratingsAverage: { $avg: "$rating" },
        },
      },
    ]);

    if (stats) {
      await Product.findByIdAndUpdate(prodId, {
        ratingsQuantity: stats[0]?.ratingsQuantity,
        ratingsAverage: stats[0]?.ratingsAverage,
      });
    } else {
      await Product.findByIdAndUpdate(prodId, {
        ratingsQuantity: 0,
        ratingsAverage: 0,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

reviewSchema.statics.calcHostAverages = async function (hostId) {
  if (!hostId) return;
  try {
    const stats = await this.aggregate([
      {
        $match: { host: hostId },
      },
      {
        $group: {
          _id: "$host",
          ratingsQuantity: { $sum: 1 },
          ratingsAverage: { $avg: "$rating" },
        },
      },
    ]);

    if (stats) {
      await User.findByIdAndUpdate(hostId, {
        ratingsQuantity: stats[0]?.ratingsQuantity,
        ratingsAverage: stats[0]?.ratingsAverage,
      });
    } else {
      await User.findByIdAndUpdate(hostId, {
        ratingsQuantity: 0,
        ratingsAverage: 0,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

reviewSchema.post("save", function () {
  this.constructor.calcProdAverages(this.product);
  this.constructor.calcHostAverages(this.host);
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
