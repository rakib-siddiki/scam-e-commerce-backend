const categorySchema = require("../../../models/categorySchema");

const getAllCategoryController = async (req, res) => {
  try {
    const allCategory = await categorySchema.find({}).populate("subCategory");
    res.send(allCategory);
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = getAllCategoryController;
