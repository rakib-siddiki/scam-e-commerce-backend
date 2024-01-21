const User = require("../../models/userSchema.js");
const bcrypt = require("bcrypt");
const emailValidation = require("../../utils/auth/tokenUtils/emailValidation.js");
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!emailValidation(email))
      return res.status(400).send({ message: "Please enter a valid email" });
    if (!existingUser)
      return res
        .status(400)
        .send({ message: "User with this email doesn't exist" });
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch)
      return res.status(400).send({ message: "Password is incorrect" });
    if (!existingUser.verify)
      return res.status(400).send({ message: "Please verify your email" });
    res.status(200).send({ message: "Login Successful" });
  } catch (error) {
    console.log("error", error.message);
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = loginController;
