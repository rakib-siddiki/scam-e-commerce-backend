const Merchant = require("../../models/merchantSchema");
const productSchema = require("../../models/productSchema");

const uploadProductController = async (req, res) => {
  try {
    const { brand, image, description, name } = await req.body;
    if (!brand || !image || !description || !name)
      return res.status(400).send({ message: "All input are must be field" });
    const newProduct = new productSchema({ ...req.body });
    await newProduct.save();
    await Merchant.updateOne(
      { _id: brand },
      { $push: { products: newProduct._id } },
      { new: true }
    );
    res.send({ message: "product created successfully" });
  } catch (error) {
    console.log("error", error.message);
  }
};
module.exports = uploadProductController;
