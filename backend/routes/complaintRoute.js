const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  addComplaint,
  getAllComplaints,
  getComplaintById,
} = require("../controllers/complaintController");

router.route("/addComplaint").post(protect, addComplaint);
router.route("/getAllComplaints").get(protect, getAllComplaints);
router.route("/:id").get(protect, getComplaintById);

module.exports = router;
