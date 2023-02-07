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

router
  .route("/:slug")
  .get(getProduct)
  .patch(protect, updateProduct)
  .delete(protect, restrictTo("admin", "author"), deleteProduct);

module.exports = router;
