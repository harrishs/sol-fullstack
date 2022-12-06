const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  //get token from header called authorization
  const token = req.get("Authorization");
  try {
    decodedToken = jwt.verify(token, process.env.SECRET);
  } catch (err) {
    res.status(500).json({ err });
  }
  if (!decodedToken) {
    res.status(401).json({ err: { msg: "Not Authenticated" } });
  }
  req.userId = decodedToken.id;
  next();
};
