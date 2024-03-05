const mongoose = require("mongoose");

const MerchantSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: true,
  },
  officialMail: {
    type: String,
    required: true,
    unique: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Merchant =mongoose.models.merchants || mongoose.model("Merchant", MerchantSchema);
module.exports = Merchant