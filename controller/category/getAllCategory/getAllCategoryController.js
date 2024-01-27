const categoryScema = require("../../../models/categoryScema");

const getAllCategoryController = async(req,res)=>{
try {

    const allCategory = await categoryScema.find({}).populate("subCategory")
    res.send(allCategory)
    
} catch (error) {
    console.log("error", error);
}
}

module.exports = getAllCategoryController;