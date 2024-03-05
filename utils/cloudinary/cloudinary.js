const cloudinary = require("cloudinary").v2;
const fs  =require('fs')
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadWithCloudinary = async (localPath) => {
  try {
    const imageData = await cloudinary.uploader.upload(localPath, (res) => res);
    fs.unlinkSync(localPath)
    return imageData;
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = uploadWithCloudinary;
