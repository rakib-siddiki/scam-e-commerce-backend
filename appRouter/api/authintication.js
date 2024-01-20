const express = require('express')
const registrationController = require('../../controller/registrationController.js');
const emailVerificationController = require('../../controller/emailVerificationController.js');
const renewTokenController = require('../../controller/renewTokenController.js');
const _ = express.Router()
_.post('/registration',registrationController)
_.get('/verify', emailVerificationController);
_.put('/renew-token',renewTokenController)

module.exports = _