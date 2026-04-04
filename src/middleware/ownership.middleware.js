const prisma = require("../models/user");

const checkOwnership = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user.userId;
  const userRole = req.user.role;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Admins bypass ownership check
    if (userRole === "ADMIN") {
      req.post = post;
      return next();
    }

    // Users can only modify their own posts
    if (post.author_id !== userId) {
      return res.status(403).json({ message: "Access denied" });
    }

    req.post = post;
    next();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { checkOwnership };
