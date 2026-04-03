const prisma = require("../models/user");

const createPost = async (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.userId;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        author_id: userId,
      },
    });

    res.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createPost };
