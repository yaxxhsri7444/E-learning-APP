const express = require("express"); 
const mongoose = require("mongoose"); 
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const authRoute = require("./routes/authRoutes");
const courseRoute = require("./routes/courseRoutes");
require("dotenv").config();
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:4200",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  }));


const uploadPath = path.join(__dirname, "./upload/video");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
  console.log("Uploads folder created successfully!");
}


app.use("/auth", authRoute);
app.use("/course", courseRoute);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

 

app.get("/", (req, res) => {
  res.send("E-Learning Backend Running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
