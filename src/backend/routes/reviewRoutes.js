const express = require("express");

const { protect, restrictTo } = require("../controllers/authController");

const {
  getAllReviews,
  createReview,
  getReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

const router = express.Router({
  mergeParams: true,
});

router.route("/").get(getAllReviews).post(protect, createReview);

router
  .route("/:id")
  .get(getReview)
  .patch(protect, restrictTo("author"), updateReview)
  .delete(protect, restrictTo("author", "admin"), deleteReview);

module.exports = router;
