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

router.use(protect);

router.route("/me").get(getMe, getUser).patch(protect, updateUser);
router.route("/toggleFave").patch(toggleFave);
router.route("/getFaves").get(getFaves);
router.route("/:id").get(getUser).patch(updateUser);

// Must be logged in to access routes below

// Must be ADMIN to access routes below
router.use(restrictTo("admin"));

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
