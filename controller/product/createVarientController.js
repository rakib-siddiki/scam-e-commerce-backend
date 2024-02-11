const productSchema = require("../../models/productSchema");
const VarientSchema = require("../../models/varientSchema");
const createVarientController = async (req, res) => {
  try {
    const { name, productId, image, description } = req.body;
    if (!productId || !image || !description || !name)
      return res.status(400).send({ message: "All input are must be field" });
    const newVarient = new VarientSchema({ ...req.body });
    await newVarient.save();
    await productSchema.updateOne({ _id: newVarient.productId }, { varients:newVarient._id});
    
  } catch (error) {
    console.log("error", error.message);
  }
};
module.exports = createVarientController;
