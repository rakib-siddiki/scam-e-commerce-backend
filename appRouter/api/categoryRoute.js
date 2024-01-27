const express = require('express')
const _ = express.Router()
const categoryController = require('../../controller/category/categoryController')
const categoryStatusController = require('../../controller/category/categoryStatusController')
const subCategoryController = require('../../controller/category/subCategory/subCategoryController')
const subCategoryStatusController = require('../../controller/category/subCategory/subCategoryStatusController')
const getAllCategoryController = require('../../controller/category/getAllCategory/getAllCategoryController')
const getAllSubCategoryController = require('../../controller/category/getAllSubCategory/getAllSubCategoryController')
_.post('/categoryList',categoryController,)
_.put('/categoryStatus',categoryStatusController)
_.post('/subCategoryList',subCategoryController,)
_.put('/subCategoryStatus',subCategoryStatusController)
_.get("/getAllCategory", getAllCategoryController);
_.get("/getAllSubCategory", getAllSubCategoryController);


module.exports = _