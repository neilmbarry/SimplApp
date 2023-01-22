const Review = require('../models/reviewModel');
const AppError = require('../utils/appError');

exports.getAllReviews = async (req, res, next) => {
  try {
    let filter = {};
    if (req.params.cocktailId) {
      filter = { cocktail: req.params.cocktailId };
    }
    const reviews = await Review.find(filter);

    res.status(200).json({
      status: 'success',
      results: reviews.length,
      requestedAt: req.requestedAt,
      reviews,
    });
  } catch (err) {
    return next(err);
  }
};
exports.createReview = async (req, res, next) => {
  try {
    const newReview = {
      rating: req.body.rating,
      summary: req.body.summary,
      user: req.user.id,
      cocktail: req.params.cocktailId || req.body.cocktailId,
    };
    await Review.create(newReview);
    res.status(200).json({
      status: 'success',
      newReview,
    });
  } catch (err) {
    return next(err);
  }
};
exports.getReview = async (req, res, next) => {
  try {
    const reviewId = req.params.id;
    const review = await Review.findById(reviewId);

    if (!review) {
      return next(new AppError('No review associated with that ID.', 404));
    }

    res.status(200).json({
      status: 'success',
      review,
    });
  } catch (err) {
    return next(err);
  }
};
exports.updateReview = async (req, res, next) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, {
      rating: req.body.rating,
      summary: req.body.summary,
    });

    if (!review) {
      return next(new AppError('No review associated with that ID.', 404));
    }

    await review.save();

    res.status(200).json({
      status: 'success',
      message: 'Review Updated!',
    });
  } catch (err) {
    return next(err);
  }
};
exports.deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      return next(new AppError('Could not find review with this id.', 404));
    }
    res.status(204).json({
      status: 'success',
    });
  } catch (err) {
    return next(err);
  }
};
