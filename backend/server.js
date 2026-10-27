const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const contactRoutes = require("./routes/contact.routes");
const aiRoutes = require("./routes/ai.routes");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.FRONTEND_URL,
    ].filter(Boolean),
  })
);

app.use(express.json());

app.use("/api", contactRoutes);
app.use("/api", aiRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Rare Pharma Backend Running here",
  });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});