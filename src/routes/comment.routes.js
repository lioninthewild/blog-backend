const express = require("express");
const router = express.Router({ mergeParams: true });
const {
  addComment,
  deleteComment,
} = require("../controllers/comment.controller");
const { authenticate } = require("../middleware/auth.middleware");

router.post("/", authenticate, addComment);
router.delete("/:commentId", authenticate, deleteComment);

module.exports = router;
