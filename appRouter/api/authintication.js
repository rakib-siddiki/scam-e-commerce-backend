const express = require('express')
const registrationController = require('../../controller/registration')
const _ = express.Router()

_.get('/registration',registrationController)

module.exports = _