const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    status: {
      type: String,
      enum: ["Submitted", "In Progress", "Done"],
    },
    comments: {
      type: String,
    },
    commentedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Complaint = mongoose.model("Complaint", ComplaintSchema);

module.exports = Complaint;
