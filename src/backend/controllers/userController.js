const User = require("../models/userModel");
const AppError = require("../utils/appError");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      results: users.length,
      users,
    });
  } catch (err) {
    return next(err);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate("reviews");
    if (!user) return next(new AppError("No user with that ID", 404));
    res.status(200).json({
      status: "success",
      user,
    });
  } catch (err) {
    return next(err);
  }
};

exports.createUser = async (req, res, next) => {
  // console.log("creating user", req.body);
  try {
    const newUser = await User.create(req.body);
    console.log("HERE");
    res.status(201).json({
      status: "success",
      newUser,
    });
  } catch (err) {
    return next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    console.log(req.body, "REQ BODY");
    const userId = req.params.id || req.user.id;
    const user = await User.findByIdAndUpdate(userId, req.body);
    if (!user) return next(new AppError("No user with that ID", 404));
    res.status(200).json({
      status: "success",
      message: "User updated!",
      user,
    });
  } catch (err) {
    return next(err);
  }
};

exports.toggleFave = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { cocktailId } = req.body;
    const user = await User.findById(id);
    if (!user) return next(new AppError("No user with that ID", 404));
    let favourites = user.faves;
    if (favourites.includes(cocktailId)) {
      favourites = favourites.filter(
        (faves) => faves.toString() !== cocktailId
      );
      req.faveAdded = false;
    } else {
      favourites = [...favourites, cocktailId];
      req.faveAdded = true;
    }

    const body = { faves: favourites };

    const updatedUser = await User.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      user: updatedUser,
      faveAdded: req.faveAdded,
    });
  } catch (err) {
    return next(err);
  }
};
exports.getFaves = async (req, res, next) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id).populate("faves");
    if (!user) return next(new AppError("No user with that ID", 404));
    res.status(200).json({
      status: "success",
      results: user.faves.length,
      faves: user.faves,
    });
  } catch (err) {
    return next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    return next(err);
  }
};

exports.getMe = async (req, res, next) => {
  req.params.id = req.user.id;
  next();
};
