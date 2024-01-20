const User = require("../models/userSchema.js");
const registrationValidation = require("../utils/auth/registrationValidation.js");
const bcrypt = require("bcrypt");
const sendMail = require("../utils/auth/sendMail.js");
const jwt = require("jsonwebtoken");
const emailTokenTemplate = require("../utils/auth/emailTokenTemplate.js");
const connectTokenToDb = require("../utils/auth/connectTokenToDb.js");
const registrationController = async (req, res) => {
  try {
    const { email, password } = await req.body;
    const ifNotValidate = registrationValidation(res, req.body);
    if (ifNotValidate) return;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res
        .status(400)
        .send({ message: "User with this email already exists" });
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({ ...req.body, password: hashPassword }).save();
    const token = jwt.sign({ email }, process.env.AUTH_JWT_SECRET, {
      expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
    });
    sendMail(email, emailTokenTemplate(token));
    connectTokenToDb(email, token);
    res.send({ message: "Registration Successful" });
  } catch (error) {
    console.log("error", error);
  }
};
module.exports = registrationController;
