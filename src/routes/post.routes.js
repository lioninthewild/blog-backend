const express = require("express");
const router = express.Router();
const { createPost } = require("../controllers/post.controller");
const { authenticate } = require("../middleware/auth.middleware");

router.post("/", authenticate, createPost);

module.exports = router;
