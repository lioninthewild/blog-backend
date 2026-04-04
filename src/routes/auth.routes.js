const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth.controller");
const { authenticate, authorize } = require("../middleware/auth.middleware");

router.post("/register", register);
router.post("/login", login);

router.get("/me", authenticate, (req, res) => {
  res.json({
    message: "You are authenticated",
    user: req.user,
  });
});

router.get("/admin", authenticate, authorize("ADMIN"), (req, res) => {
  res.join({
    message: "Welcome Admin",
    user: req.user,
  });
});

module.exports = router;
