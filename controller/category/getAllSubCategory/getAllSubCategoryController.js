const subCetegorySchema = require("../../../models/subCetegorySchema");

const getAllSubCategoryController = async (req, res) => {
  try {
    const getAllSubCategory = await subCetegorySchema
      .find({})
      .populate("categoryId");
    res.send(getAllSubCategory);
  } catch (error) {
    console.log("error", error);
  }
};
module.exports = getAllSubCategoryController;
