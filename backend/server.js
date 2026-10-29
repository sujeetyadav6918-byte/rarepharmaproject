
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("./config/db")

dotenv.config();

const contactRoutes = require("./routes/contact.routes");
const aiRoutes = require("./routes/ai.routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

mongoose()

// Middleware must run before routes
app.use(express.json());

// Register routes only once
app.use("/api", contactRoutes);
app.use("/api", aiRoutes);

app.use((req, res, next) => {
  console.log("REQUEST:", req.method, req.originalUrl);
  next();
});

app.get("/", (req, res) => {
  res.json({
    message: "Rare Pharma Backend Running",
  });
});

const PORT = 5001;

// const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
