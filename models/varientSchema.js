const mongoose = require("mongoose");

const varientSchema = new mongoose.Schema({
  ram: {
    type: String,
  },
  storage: {
    type: String,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  isActve: {
    type: Boolean,
    default: false,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Varient", varientSchema);
