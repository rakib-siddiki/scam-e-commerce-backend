const categorySchema = require("../../models/categoryScema.js");
const categoryController = async (req, res) => {
  try {
    const { name} = req.body;
    const exsistingCategory = await categorySchema.findOne({ name });
    if (exsistingCategory)
      return res.status(400).send({ message: "this category already exist" });
    const newCategory = new categorySchema({ ...req.body });
    await newCategory.save();
    res.send({ message: `category ${name} is created successfully` });
  } catch (error) {
    console.log("error", error.message);
  }
};

module.exports = categoryController;
