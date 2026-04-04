const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const postRoutes = require("./routes/post.routes");
const commentRoutes = require("./routes/comment.routes");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/posts/:id/comments", commentRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

module.exports = app;
