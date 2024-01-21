const subCategorySchema = require("../../../models/subCetegoryScema.js");
const subCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const exsistingCategory = await subCategorySchema.findOne({ name });
    if (exsistingCategory)
      return res.status(400).send({ message: "this category already exist" });
    const newCategory = new categorySchema({ ...req.body });
    await newCategory.save();
    res.send({ message: "category created successfully" });
  } catch (error) {
    console.log("error", error.message);
  }
};

module.exports = subCategoryController;
