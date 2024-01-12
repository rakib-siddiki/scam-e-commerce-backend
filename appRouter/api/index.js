const express = require('express')
const _ = express.Router()
const authRoute = require('./authintication')
const authUrl = process.env.AUTH_URL

_.use(authUrl,authRoute)
module.exports= _