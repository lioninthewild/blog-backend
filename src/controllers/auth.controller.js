const prisma = require("../models/user");

const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const user = await prisma.user.create({
      data: {
        email,
        password_hash: password, // ⚠️ temporary — will be hashed in next step
      },
    });

    res.status(201).json({
      message: "User registered successfully",
      userId: user.id,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { register };
