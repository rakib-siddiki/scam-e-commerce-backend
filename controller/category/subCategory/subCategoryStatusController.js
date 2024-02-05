const subCetegorySchema = require("../../../models/subCetegorySchema");

const subCategoryStatusController = async (req, res) => {
  try {
    const { name, status } = req.body;
    const exsistingCategory = await subCetegorySchema.findOne({ name });
    if (!exsistingCategory)
      return res.status(400).send({ message: "this category doesn't exist" });
    if (status === "waiting" || status === "rejected") {
      await subCetegorySchema.updateOne(
        { name },
        { $set: { isActve: false, status } }
      );
    } else if (status === "approved") {
      await subCetegorySchema.updateOne(
        { name },
        { $set: { isActve: true, status } }
      );
    }
    res.send({ message: `${name} sub category status updated successfully` });
  } catch (error) {
    console.log("error", error.message);
  }
};

module.exports = subCategoryStatusController;
