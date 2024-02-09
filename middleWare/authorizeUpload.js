const User = require("../models/userSchema");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const authorizeUpload = async (req, res, next) => {
  try {
    const header = req.headers.authoraization.split("|");
    const userId = header[1];
    const marchentSecretKey = header[2];
    if (!header) return res.status(400).send({ message: "Unauthorized" });
    if (process.env.MARCHENT_SECRET_KEY !== marchentSecretKey)
      return res.status(400).send({ message: "Invalid Marchent" });
    if (!ObjectId.isValid(userId))
      return res.status(400).send({ message: "Invalid User" });
    const user = await User.findById(userId);
    if (user.role !== "merchant")
      return res
        .status(400)
        .send({
          message: "You can not upload products without being a merchant",
        });
    next();
  } catch (error) {
    console.log("error", error.message);
  }
};

module.exports = authorizeUpload;
