const subCetegoryScema = require("../../../models/subCetegoryScema");

const getAllSubCategoryController = async (req, res) => {
  try {
    const getAllSubCategory = await subCetegoryScema
      .find({})
      .populate("categoryId");
    res.send(getAllSubCategory);
  } catch (error) {
    console.log("error", error);
  }
};
module.exports = getAllSubCategoryController;
