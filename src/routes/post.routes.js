const express = require("express");
const router = express.Router();
const {
  createPost,
  getAllPosts,
  updatePost,
} = require("../controllers/post.controller");
const { authenticate } = require("../middleware/auth.middleware");
const { checkOwnership } = require("../middleware/ownership.middleware");

router.get("/", authenticate, getAllPosts);
router.post("/", authenticate, createPost);
router.put("/:id", authenticate, checkOwnership, updatePost);

module.exports = router;
