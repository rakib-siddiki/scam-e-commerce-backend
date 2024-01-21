

const jwt = require("jsonwebtoken");
const User = require("../../models/userSchema");
const sendMail = require("../../utils/auth/sendMail");
const emailTokenTemplate = require("../../utils/auth/tokenUtils/emailTokenTemplate");
const renewTokenController = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser.verify)
      return res.status(400).send({ message: "User already verified" });

    const token = jwt.sign({ email }, process.env.AUTH_JWT_SECRET, {
      expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
    });
    sendMail(email, emailTokenTemplate(token));
    await User.updateOne({ email }, { token });
    res.status(200).send({ message: "Token sent to your email" });
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = renewTokenController;
