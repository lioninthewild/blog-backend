const app = require("./app");
const { port } = require("./config/config");

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);
