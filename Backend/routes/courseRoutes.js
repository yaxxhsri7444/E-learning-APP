const express = require("express");
const { createCourse, getAllCourses } = require("../controllers/course.controller");

const router = express.Router();

router.post("/create", createCourse);
router.get("/allcourse", getAllCourses);

module.exports = router;
