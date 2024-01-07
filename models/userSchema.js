const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    recuired: true,
  },
  postCode: {
    type: String,
    recuired: true,
  },
});

const User = mongoose.models.users || mongoose.model("User", userSchema);

module.exports = User
