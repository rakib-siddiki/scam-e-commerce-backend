const express = require('express')
const _ = express.Router()
const authRoute = require('./authintication')
const categoryRoute = require('./categoryRoute')
const authUrl = process.env.AUTH_URL

_.use(authUrl,authRoute)
_.use('/category',categoryRoute)
module.exports= _