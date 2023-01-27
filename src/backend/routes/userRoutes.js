const express = require("express");

const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getMe,
  toggleFave,
  getFaves,
} = require("../controllers/userController");

const {
  signUp,
  login,
  protect,
  restrictTo,
} = require("../controllers/authController");

const router = express.Router();

router.route("/signup").post(signUp);
router.use((req, res, next) => {
  console.log("Hello from inside user routes! 🙋‍♂️");
  next();
});
router.route("/login").post(login);

// router.route("/:id").get(getUser);

router.use(protect);

router.route("/me").get(protect, getMe, getUser).patch(protect, updateUser);
router.route("/me/toggleFave").patch(protect, getMe, toggleFave);
router.route("/me/getFaves").get(protect, getMe, getFaves);
router.route("/:id").get(getUser).patch(updateUser);

// Must be logged in to access routes below

// Must be ADMIN to access routes below
router.use(restrictTo("admin"));

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").delete(deleteUser);

module.exports = router;
