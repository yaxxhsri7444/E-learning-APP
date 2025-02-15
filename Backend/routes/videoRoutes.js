const express = require("express");
const multer = require("multer");
const { uploadVideo } = require("../controllers/video.controller");

const storage = multer.diskStorage({
  destination: "../upload/video",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

const router = express.Router();
router.post("/upload", upload.single("video"), uploadVideo);

module.exports = router;
