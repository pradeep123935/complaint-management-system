const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();
const connectDB = require("./config/db");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const authRouter = require("./routes/authRoutes");
const complaintRouter = require("./routes/complaintRoute");

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/complaint", complaintRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server running on port ${port}`));
