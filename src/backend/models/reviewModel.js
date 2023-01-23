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
  console.log("PREFINDING REVIEW");
  this.populate({
    path: "user",
    select: "firstName lastName image",
  });
  next();
});

reviewSchema.statics.calcAverages = async function (itemId) {
  try {
    const stats = await this.aggregate([
      {
        $match: { product: itemId },
      },
      {
        $group: {
          _id: "$product",
          ratingsQuantity: { $sum: 1 },
          ratingsAverage: { $avg: "$rating" },
        },
      },
    ]);

    console.log("STATS2?11111?", stats);

    if (stats) {
      await Product.findByIdAndUpdate(itemId, {
        ratingsQuantity: stats[0]?.ratingsQuantity,
        ratingsAverage: stats[0]?.ratingsAverage,
      });
    } else {
      await Product.findByIdAndUpdate(itemId, {
        ratingsQuantity: 0,
        ratingsAverage: 0,
      });
    }
  } catch (err) {
    console.log(err);
  }
  try {
    const stats2 = await this.aggregate([
      {
        $match: { host: itemId },
      },
      {
        $group: {
          _id: "$user",
          ratingsQuantity: { $sum: 1 },
          ratingsAverage: { $avg: "$rating" },
        },
      },
    ]);

    console.log('STATS2??"?', stats2);

    if (stats2) {
      await User.findByIdAndUpdate(itemId, {
        ratingsQuantity: stats2[0]?.ratingsQuantity,
        ratingsAverage: stats2[0]?.ratingsAverage,
      });
    } else {
      await User.findByIdAndUpdate(itemId, {
        ratingsQuantity: 0,
        ratingsAverage: 0,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

reviewSchema.post("save", function () {
  this.constructor.calcAverages(this.product);
  this.constructor.calcAverages(this.host);
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
