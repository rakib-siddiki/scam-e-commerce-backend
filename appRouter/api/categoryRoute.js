const express = require('express')
const _ = express.Router()
const categoryController = require('../../controller/category/categoryController')
const categoryStatusController = require('../../controller/category/categoryStatusController')
const subCategoryController = require('../../controller/category/subCategory/subCategoryController')
const subCategoryStatusController = require('../../controller/category/subCategory/subCategoryStatusController')
_.post('/categoryList',categoryController,)
_.put('/categoryStatus',categoryStatusController)
_.post('/subCategoryList',subCategoryController,)
_.put('/subCategoryStatus',subCategoryStatusController)


module.exports = _