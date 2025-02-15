const express = require("express");
const Enrollment = require("../models/enrollment.model");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/enroll", verifyToken, async (req, res) => {
  try {
    const { courseId } = req.body;
    const newEnrollment = new Enrollment({ student: req.user.userId, course: courseId });
    await newEnrollment.save();
    res.json({ message: "Enrolled Successfully", enrollment: newEnrollment });
  } catch (error) {
    res.status(500).json({ message: "Enrollment Failed", error });
  }
});


router.get("/my-courses", verifyToken, async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ student: req.user.userId }).populate("course");
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching enrollments", error });
  }
});

module.exports = router;
