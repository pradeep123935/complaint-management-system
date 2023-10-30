const asyncHandler = require("../middleware/asyncHandler");
const Complaint = require("../models/Complaint");

const addComplaint = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  await Complaint.create({
    title,
    description,
    userId: req.user._id,
  });
  return res.status(200).json({ message: "Complaint Registered successfully" });
});

const getAllComplaints = asyncHandler(async (req, res) => {
  const complaints = await Complaint.find();
  return res.status(200).json(complaints);
});

const getComplaintById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const complaint = await Complaint.findById(id);
  return res.status(200).json(complaint);
});

module.exports = {
  addComplaint,
  getAllComplaints,
  getComplaintById,
};
