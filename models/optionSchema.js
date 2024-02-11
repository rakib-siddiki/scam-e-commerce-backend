const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  varientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Varient",
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

module.exports = mongoose.model("Option", optionSchema);
