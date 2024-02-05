const Merchant = require("../../models/merchantSchema");
const User = require("../../models/userSchema");
const emailValidation = require("../../utils/auth/tokenUtils/emailValidation");
const becomeMerchantController = async (req, res) => {
  try {
    const { brandName, officialMail, telephone, address, city, author } =
      req.body;
    console.log("🚀 > becomeMerchantController > brandName:", brandName);
    const existingBrand = await Merchant.findOne({ brandName });
    if (existingBrand)
      return res
        .status(400)
        .send({ message: "this Brand Name already exist try another one" });
    if (!emailValidation(officialMail))
      return res.status(400).send({ message: "Please enter a valid email" });
    if (
      !brandName ||
      !officialMail ||
      !telephone ||
      !address ||
      !city ||
      !author
    )
      return res.status(400).send({ message: "Please fill all the fields" });
    const becomeMerchant = new Merchant({ ...req.body });
    await becomeMerchant.save();
    await User.findOneAndUpdate(
      { _id: author },
      { role: "merchant" },
      { new: true }
    );

    res.send({ message: "merchant created successfully" });
  } catch (error) {
    console.log("error", error);
  }
};
module.exports = becomeMerchantController;
