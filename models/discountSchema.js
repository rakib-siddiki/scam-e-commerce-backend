const mongoose = require("mongoose");

const discountSchema = mongoose.Schema({
  cash: Number,
  persentage: Number,
  flat: { type: String, default: false },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  subCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Subcategory" },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  varientId: { type: mongoose.Schema.Types.ObjectId, ref: "Varient" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Discount", discountSchema);
