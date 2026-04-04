const prisma = require("../models/user");

const addComment = async (req, res) => {
  const { id } = req.params; // post id
  const { content } = req.body;
  const userId = req.user.userId;

  if (!content) {
    return res.status(400).json({ message: "Content is required" });
  }

  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        author_id: userId,
        post_id: id,
      },
    });

    res.status(201).json({
      message: "Comment added successfully",
      comment,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteComment = async (req, res) => {
  const { commentId } = req.params;
  const userId = req.user.userId;
  const userRole = req.user.role;

  try {
    const comment = await prisma.comment.findUnique({
      where: { id: commentId },
    });

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    if (userRole !== "ADMIN" && comment.author_id !== userId) {
      return res.status(403).json({ message: "Access denied" });
    }

    await prisma.comment.delete({
      where: { id: commentId },
    });

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addComment, deleteComment };
