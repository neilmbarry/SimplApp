const express = require("express");

const {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const { protect, restrictTo } = require("../controllers/authController");

const router = express.Router();

router.route("/").get(getAllProducts).post(protect, createProduct);

// Define route to aggregate ingredients
// router.route('/');

router
  .route("/:slug")
  .get(getProduct)
  .patch(protect, restrictTo("admin", "author"), updateProduct)
  .delete(protect, restrictTo("admin", "author"), deleteProduct);

module.exports = router;
