const Course = require("../models/course.model");

exports.createCourse = async (req, res) => {
  try {
    const { title, description, instructor } = req.body;
    const newCourse = new Course({ title, description, instructor });
    await newCourse.save();
    res.json({ message: "Course created successfully", courseId: newCourse._id });
  } catch (error) {
    res.status(500).json({ message: "Error creating course", error });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses", error });
  }
};
