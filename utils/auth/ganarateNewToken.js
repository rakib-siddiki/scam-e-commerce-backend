const User = require("../../models/userSchema.js");
const emailTokenTemplate = require("./emailTokenTemplate.js");
const sendMail = require("./sendMail.js");
const jwt = require("jsonwebtoken");
const renewToken = async (req, res) => {
  const { email } = req.body;
  const existingUser = await User.findOne({ email });
  const token = jwt.sign({ email }, process.env.AUTH_JWT_SECRET, {
    expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
  });
  sendMail(email, emailTokenTemplate(token));
  await User.updateOne({email},{token})
  res.status(200).send({ message: "Token sent to your email" });
};

module.exports = renewToken;
