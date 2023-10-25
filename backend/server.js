const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// app.get("/", (req, res) => {
//   return res.send("Hello World");
// });

app.listen(port, () => console.log(`server running on port ${port}`));
