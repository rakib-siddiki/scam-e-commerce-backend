const categorySchema = require("../../models/categorySchema");
const subCategorySchema = require("../../models/subCetegorySchema");
const productSchema = require("../../models/productSchema");
const discountSchema = require("../../models/discountSchema");
const varientSchema = require("../../models/varientSchema");
const { isValidObjectId } = require("mongoose");

const discountController = async (req, res) => {
  try {
    const { categoryId, subCategoryId, productId, varientId } = req.body;
    if (!categoryId && !subCategoryId && !productId && !varientId) {
      return res.status(400).send({
        message: "Please provide the Id where you wanted to create discount",
      });
    }
    if (categoryId) {
      if (!isValidObjectId(categoryId))
        return res.status(400).send({ message: "Invalid Id" });
      const validId = await categorySchema.findById(categoryId);
      if (!validId) return res.status(400).send({ message: "Invalid Id" });
    }
    if (subCategoryId) {
      if (!isValidObjectId(subCategoryId))
        return res.status(400).send({ message: "Invalid Id" });
      const validId = await subCategorySchema.findById(subCategoryId);
      if (!validId) return res.status(400).send({ message: "Invalid Id" });
    }
    if (productId) {
      if (!isValidObjectId(productId))
        return res.status(400).send({ message: "Invalid Id" });
      const validId = await productSchema.findById(productId);
      if (!validId) return res.status(400).send({ message: "Invalid Id" });
    }
    if (varientId) {
      if (!isValidObjectId(varientId))
        return res.status(400).send({ message: "Invalid Id" });
      const validId = await varientSchema.findById(varientId);
      if (!validId) return res.status(400).send({ message: "Invalid Id" });
    }

    const createDiscount = new discountSchema({ ...req.body });
    await createDiscount.save();
    res.send({ message: "Created Discount successfully" });
  } catch (error) {
    console.log("error", error.message);
  }
};
module.exports = discountController;
