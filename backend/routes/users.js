const express = require('express')
const userController = require('../services/user.service')
const { signup, login,getAllUsers,getUser,updateUser,deleteUser } = userController
const userAuth = require('../middleware/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/signup', userAuth.saveUser, signup)

//login route
router.post('/login', login )

router.get('/getallusers',userAuth.authenticateToken('admin') , getAllUsers )

router.get('/getuser/:id',userAuth.authenticateToken('admin') , getUser )

router.post('/updateUser/:id',userAuth.authenticateToken('admin') , updateUser )
router.get('/deleteUser/:id',userAuth.authenticateToken('admin') , deleteUser )

module.exports = router 