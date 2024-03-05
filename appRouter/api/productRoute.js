const express = require("express");
const authorizeUpload = require("../../middleWare/authorizeUpload");
const uploadProductController = require("../../controller/product/createProductController");
const createVarientController = require("../../controller/product/createVarientController");
const upload = require("../../middleWare/uploadImage");
const discountController = require("../../controller/product/discountController");
const _ = express.Router();

_.post("/createProduct", authorizeUpload, uploadProductController);
_.post("/createVarient", upload.single("image"), createVarientController);
_.post('/createDiscount',discountController)

module.exports = _;
