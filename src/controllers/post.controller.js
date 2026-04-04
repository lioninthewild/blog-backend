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

const getAllPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  try {
    const total = await prisma.post.count();

    const posts = await prisma.post.findMany({
      skip,
      take: limit,
      include: {
        author: {
          select: {
            id: true,
            email: true,
            role: true,
          },
        },
        comments: {
          include: {
            author: {
              select: {
                id: true,
                email: true,
              },
            },
          },
          orderBy: {
            created_at: "desc",
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });

    res.status(200).json({
      posts,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  try {
    const updated = await prisma.post.update({
      where: { id },
      data: { title, content },
    });

    res.status(200).json({
      message: "Post updated successfully",
      post: updated,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.post.delete({
      where: { id },
    });

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createPost, getAllPosts, updatePost, deletePost };
