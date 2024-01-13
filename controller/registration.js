const User = require("../models/userSchema");
const validateRegistration = require("../utils/registration-validation");
const bcrypt = require("bcrypt");
const sendMail = require("../utils/sendMail");
const registrationController = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      telephone,
      password,
      city,
      address,
      postCode,
    } = await req.body;
    const validate = validateRegistration(
      res,
      firstName,
      lastName,
      email,
      telephone,
      password,
      city,
      address,
      postCode
    );
    if (validate) return;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      email,
      telephone,
      password: hashPassword,
      city,
      address,
      postCode,
    });
    
    sendMail(email);
    user.save();
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};
module.exports = registrationController;
