const express = require("express");
const authorizeUpload = require("../../middleWare/authorizeUpload");
const uploadProductController = require("../../controller/product/uploadProductController");
const _ = express.Router();

_.post("/uploadProduct", authorizeUpload,uploadProductController);

module.exports = _;
