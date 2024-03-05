const User = require("../models/userSchema");
const mongoose = require("mongoose");
const { isValidObjectId } = mongoose;
const authorizeUpload = async (req, res, next) => {
  try {
    const header = req.headers.authoraization;
    if (!header) return res.status(400).send({ message: "Unauthorized" });
    const user = header.split("|");
    const userId = user[1];
    const marchentSecretKey = user[2];
    if (process.env.MARCHENT_SECRET_KEY !== marchentSecretKey)
      return res.status(400).send({ message: "Unauthorized" });
    if (!isValidObjectId(userId))
      return res.status(400).send({ message: "Invalid User" });
    const existingUser = await User.findById(userId);
    if (existingUser.role !== "merchant")
      return res.status(400).send({
        message: "You can not upload products without being a merchant",
      });
    next();
  } catch (error) {
    console.log("error", error.message);
  }
};

module.exports = authorizeUpload;
