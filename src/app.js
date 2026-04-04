const express = require("express");
const authRoutes = require("./routes/auth.routes");
const postRoutes = require("./routes/post.routes");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

module.exports = app;
