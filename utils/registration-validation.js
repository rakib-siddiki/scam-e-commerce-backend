const validateRegistration = (
  res,{...inputs}
) => {
  const { firstName, lastName, email, telephone, password, city, address, postCode } = inputs;
  if (!firstName || !lastName)
    return res
      .status(400)
      .send({ message: "First Name and Last Name are required" });
  if (!email)
    return res.status(400).send({ message: "Please enter your email" });
  if (!telephone)
    return res.status(400).send({ message: "Please enter your phone number" });
  if (!password)
    return res.status(400).send({ message: "Please enter your password" });
  if (!city) return res.status(400).send({ message: "Please enter your city" });
  if (!address)
    return res.status(400).send({ message: "Please enter your address" });
  if (!postCode)
    return res.status(400).send({ message: "Please enter your post code" });
};

module.exports = validateRegistration;
