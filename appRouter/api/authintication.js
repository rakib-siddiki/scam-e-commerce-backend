const express = require('express')
const registrationController = require('../../controller/registrationController');
const emailVerificationController = require('../../controller/emailVerificationController');
const renewToken = require('../../utils/auth/ganarateNewToken');
const _ = express.Router()
_.post('/registration',registrationController)
_.get('/verify', emailVerificationController);
_.post('/renew-token',renewToken)

module.exports = _