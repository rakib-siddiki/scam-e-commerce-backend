const express = require('express')
const _ = express.Router()
const authRoute = require('./authintication')
const categoryRoute = require('./categoryRoute')
const productRoute = require('./productRoute')
const authUrl = process.env.AUTH_URL

_.use(authUrl,authRoute)
_.use('/category',categoryRoute)
_.use('/product',productRoute)
module.exports= _