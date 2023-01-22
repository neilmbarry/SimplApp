const mongoose = require("mongoose");
const Cocktail = require("./productModel");

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
    select: "name",
  });
  next();
});

reviewSchema.statics.calcAverages = async function (cocktailId) {
  const stats = await this.aggregate([
    {
      $match: { cocktail: cocktailId },
    },
    {
      $group: {
        _id: "$cocktail",
        ratingsQuantity: { $sum: 1 },
        ratingsAverage: { $avg: "$rating" },
      },
    },
  ]);

  if (stats) {
    await Cocktail.findByIdAndUpdate(cocktailId, {
      ratingsQuantity: stats[0].ratingsQuantity,
      ratingsAverage: stats[0].ratingsAverage,
    });
  } else {
    await Cocktail.findByIdAndUpdate(cocktailId, {
      ratingsQuantity: 0,
      ratingsAverage: 0,
    });
  }
};

reviewSchema.post("save", function () {
  this.constructor.calcAverages(this.cocktail);
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
