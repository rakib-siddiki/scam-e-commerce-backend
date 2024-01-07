const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    const db = mongoose.connection;
    db.on("connected", () => {
      console.log("connected to db");
    });
    db.on("disconnected", () => {
      console.log("disconnected from db");
    });
    db.on("error", () => {
      console.log("error in db connection");
    });
  } catch (error) {
    console.error(error);
    console.log(error.message);
    process.exit(1)
  }
};

module.exports = dbConnect;
