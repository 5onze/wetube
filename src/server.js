import express from "express";

const PORT = 4000;

const app = express();

const middleware = (req, res, next) => {
  console.log(`Someone is going to: ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("I love middlewares");
};

app.get("/", middleware, handleHome);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
