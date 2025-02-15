const path = require("path");

exports.uploadVideo = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    res.json({ message: "Video uploaded successfully", filePath: req.file.path });
  } catch (error) {
    res.status(500).json({ message: "Video upload failed", error });
  }
};
