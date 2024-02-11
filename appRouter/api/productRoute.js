const express = require("express");
const authorizeUpload = require("../../middleWare/authorizeUpload");
const uploadProductController = require("../../controller/product/uploadProductController");
const createVarientController = require("../../controller/product/createVarientController");
const _ = express.Router();

_.post("/uploadProduct", authorizeUpload,uploadProductController);
_.post("/createVarient", createVarientController);

module.exports = _;
