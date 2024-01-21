const express = require('express')
const _ = express.Router()
const categoryController = require('../../controller/category/categoryController')
const categoryStatusController = require('../../controller/category/categoryStatusController')
_.post('/categoryList',categoryController,)
_.put('/categoryStatus',categoryStatusController)


module.exports = _