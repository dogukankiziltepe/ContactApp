const express = require('express')
const phoneNumberService = require('../services/phoneNumber.service')
const { addPhoneNumbers,deletePhoneNumber } = phoneNumberService
const userAuth = require('../middleware/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/addphonenumbers', userAuth.authenticateToken, addPhoneNumbers)

//delete contact route get contact id from params
router.delete('/deletephonenumber/:phonenumberid', userAuth.authenticateToken, deletePhoneNumber )

module.exports = router