const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const tutorRoutes = require('./routes/tutorRoutes');

// route import space
const userRoutes = require("./routes/userRoutes");

const port = process.env.PORT || 5000;
const app = express();

// use middlewares
app.use(
  cors({
    origin: ["http://localhost:3000" , "https://tutor-sheba.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));

// database connect for mongoDB
connectDB();

// routes
app.use("/api", userRoutes);
app.use("/api", tutorRoutes);

// testing server
app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
