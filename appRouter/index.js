const express = require('express')
const _=express.Router()
const api = require('./api')
_.use(express.json());

const baseUrl = process.env.BASE_URL
_.use(baseUrl,api)
module.exports = _