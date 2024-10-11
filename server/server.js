const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");
const app = express();
require('dotenv').config();  
const MONGO_URI = process.env.MONGO_URI;  
mongoose
  .connect(MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => console.log("MongoDB connected")) 
  .catch((error) => console.log("MongoDB connection error:", error));  
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: "http://localhost:5173",  
    methods: ["GET", "POST", "DELETE", "PUT"], 
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
