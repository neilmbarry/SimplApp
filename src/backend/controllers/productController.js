const Product = require("../models/productModel");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");

exports.getAllProducts = async (req, res, next) => {
  try {
    // console.log(req.query);

    const features = new APIFeatures(Product.find(), req.query)
      .filter()
      .sort()
      .limitFields();
    // .paginate();

    // console.log(features.query);

    const allMatchingProducts = await features.query;

    const featuresPaginated = new APIFeatures(Product.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const products = await featuresPaginated.query;
    console.log("Hello from the getAllProducts! 🙋‍♂️");
    res.status(200).json({
      status: "success",
      // Aggregateproducts_results: productsByIng.length,
      page: +req.query.page,
      searchTerm: req.query.nameSearch,
      results: allMatchingProducts.length,
      // Aggregateproducts: productsByIng,
      products,
    });
  } catch (err) {
    return next(err);
  }
};

exports.createProduct = async (req, res, next) => {
  // console.log(req.body, '<--- create cocktail');
  try {
    const newProduct = await Product.create({
      ...req.body,
      host: req.user.id,
    });

    res.status(200).json({
      status: "success",
      message: "Added Product",
      data: newProduct,
    });
  } catch (err) {
    return next(err);
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const product = await Product.findOne({ slug })
      .populate("reviews")
      .populate("host");
    if (!product) {
      return next(new AppError("Could not find Product with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      message: "Got cocktail",
      product,
    });
  } catch (err) {
    return next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const product = await Product.findOneAndUpdate({ slug }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return next(new AppError("Couldn't find product with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      message: "Updated product",
      data: product,
    });
  } catch (err) {
    return next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const { slug } = req.params;
    await Product.findOneAndDelete({ slug });
    res.status(204).json({
      status: "success",
      message: "Deleted product",
    });
  } catch (err) {
    return next(err);
  }
};
