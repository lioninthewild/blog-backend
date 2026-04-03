const express = require("express");
const router = express.Router();
const { createPost, getAllPosts } = require("../controllers/post.controller");
const { authenticate } = require("../middleware/auth.middleware");

router.get("/", authenticate, getAllPosts);
router.post("/", authenticate, createPost);

module.exports = router;
