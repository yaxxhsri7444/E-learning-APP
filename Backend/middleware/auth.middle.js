const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // Extract token from the Authorization header
  const token = req.header("Authorization") && req.header("Authorization").split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "Access Denied" });
  }

  try {
    // Verify the token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Attach the verified user data to the request
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

module.exports = verifyToken;
