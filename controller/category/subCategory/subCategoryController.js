const categorySchema = require("../../../models/categorySchema.js");
const subCategorySchema = require("../../../models/subCetegorySchema.js");
const subCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const exsistingCategory = await subCategorySchema.findOne({ name });
    if (exsistingCategory)
      return res.status(400).send({ message: "this category already exist" });
    const newCategory = new subCategorySchema({ ...req.body });
    await newCategory.save();
    // push the new category to the category
    await categorySchema.findOneAndUpdate(
      { _id: newCategory.categoryId },
      { $push: { subCategory: newCategory._id } },
      { new: true }
    );
    res.send({ message: `sub category ${name} created successfully` });
  } catch (error) {
    console.log("error", error.message);
  }
};

module.exports = subCategoryController;
