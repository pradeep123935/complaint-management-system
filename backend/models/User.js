const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      minLength: [4, "name must have atleast 4 characters"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "email already exists!!"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minLength: [6, "name must have atleast 4 characters"],
    },
    role: {
      type: String,
      enum: ["ADMIN", "STAFF", "USER"],
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
