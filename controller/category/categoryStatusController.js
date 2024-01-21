const categoryStatusController = async (req, res) => {
    try {
        const { name, status } = req.body;
        const exsistingCategory = await categorySchema.findOne({ name });
        if (!exsistingCategory) return res.status(400).send({ message: "this category doesn't exist" });
        if(status === "waiting" ||  status === "rejected"){
            await categorySchema.updateOne({ name }, { $set: { status: true } });
        }else if(status === "false"){
            await categorySchema.updateOne({ name }, { $set: { status: false } });
        }
        res.send({ message: "category status updated successfully" });
    } catch (error) {
        console.log("error", error.message);
    }
};

module.exports = categoryStatusController;
