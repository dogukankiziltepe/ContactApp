const express = require('express')
const contactController = require('../services/contact.service')
const { createContact,getContacts,deleteContact,getContact } = contactController
const userAuth = require('../middleware/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/addContact', userAuth.authenticateToken(), createContact)

//login route
router.get('/getContacts/:userId',  userAuth.authenticateToken(),getContacts )

router.get('/getContactDetails/:id', userAuth.authenticateToken(), getContact )

//delete contact route get contact id from params
router.delete('/deleteContact/:contactId', userAuth.authenticateToken(), deleteContact )

module.exports = router