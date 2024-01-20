const passwordValidation = require("./passwordValidation");
const emailValidation = require("./tokenUtils/emailValidation");

const registrationValidation = (res, { ...inputs }) => {
  const {
    firstName,
    lastName,
    email,
    telephone,
    password,
    city,
    address,
    postCode,
  } = inputs;
  const strongPassword = passwordValidation(password);
  if (!firstName || !lastName)
    return res
      .status(400)
      .send({ message: "First Name and Last Name are required" });
  if (!email)
    return res.status(400).send({ message: "Please enter your email" });
  if (!emailValidation(email))
    return res.status(400).send({ message: "Please enter a valid email" });
  if (!telephone)
    return res.status(400).send({ message: "Please enter your phone number" });
  if (!password)
    return res.status(400).send({ message: "Please enter your password" });
  if (!strongPassword.valid)
    return res.status(400).send({ message: strongPassword.error[0] });
  if (!city) return res.status(400).send({ message: "Please enter your city" });
  if (!address)
    return res.status(400).send({ message: "Please enter your address" });
  if (!postCode)
    return res.status(400).send({ message: "Please enter your post code" });
};

module.exports = registrationValidation;
