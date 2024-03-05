const { isValidObjectId } = require("mongoose");
const productSchema = require("../../models/productSchema");
const VarientSchema = require("../../models/varientSchema");
const uploadWithCloudinary = require("../../utils/cloudinary/cloudinary");
const createVarientController = async (req, res) => {
  try {
    const localPath = req.file.path;
    const {url} = await uploadWithCloudinary(localPath)
    const { productId,ram,storage,color,size,image } = req.body;
    if (!productId)
      return res.status(400).send({ message: "All input are must be field" });
    if (!isValidObjectId(productId))
      return res.status(400).send({ message: "Product couldn't find" });
    const existingVarient = await VarientSchema.findOne({
      productId,
      ram,
      storage,
      color,
      size,
    });
    if (existingVarient) return res.status(400).send({ message: "Variant already exists" });
    const newVarient = new VarientSchema({...req.body,image:url });
    await newVarient.save();
    await productSchema.updateOne(
      { _id: newVarient.productId },
      { updatedAt: Date.now(), $push: { varients: newVarient._id } }
    );
    res.send({ message: "Varient created successfully" });
  } catch (error) {
    console.log("error", error.message);
  }
};
module.exports = createVarientController;
