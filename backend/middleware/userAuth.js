
//importing modules
const express = require("express");
const db = require("../models");
const jwt = require('jsonwebtoken');
//Assigning db.users to User variable
 const User = db.User;

//Function to check if username or email already exist in the database
//this is to avoid having two users with the same username and email
 const saveUser = async (req, res, next) => {
 //search the database to see if user exist
 console.log(req.body)
 try {
   const username = await User.findOne({
     where: {
       username: req.body.username,
     },
   });
   //if username exist in the database respond with a status of 409
   if (username) {
     return res.json(409).send("username already taken");
   }

   //checking if email already exist
   const emailcheck = await User.findOne({
     where: {
       email: req.body.email,
     },
   });

   //if email exist in the database respond with a status of 409
   if (emailcheck) {
     return res.json(409).send("Authentication failed");
   }

   next();
 } catch (error) {
   console.log(error);
 }
};

const authenticateToken = (role = "user") => (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, "secretKey", (err, user) => {
    console.log(err)

    if (err) return res.sendStatus(403)
    if(role === "admin" && user.role === role){
      const User = db.User.findOne({
        where: {
          id: user.id,
          role: 'admin'
        },
      });
      if(User === null){
        return res.sendStatus(403)
      }
    }
    req.user = user
    next()
  })
}

//exporting module
 module.exports = {
 saveUser,
 authenticateToken
};