const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/tokenUtils");

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const findUser = await User.findOne({ email });
  if (findUser) {
    res.status(400);
    throw new Error("User already exists with the email!!");
  }

  console.log(name + " " + email + " " + password);
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  console.log(hashPassword);

  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  if (user) {
    return res.status(201).json({
      message: "User registered successfully",
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    const compare = await bcrypt.compare(password, user.password);
    if (!compare) {
      res.status(400);
      throw new Error("Incorrect email or password!!");
    }

    const token = generateToken({ userId: user._id });
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "dev",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } else {
    res.status(400);
    throw new Error("Incorrect email or password!!");
  }
});

const logout = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ msg: "Logged out successfully!!" });
});

module.exports = {
  register,
  login,
  logout,
};
