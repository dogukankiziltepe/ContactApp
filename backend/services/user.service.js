//importing modules
const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

// Assigning users to the variable User
const User = db.User;

//signing a user up
//hashing users password before its saved to the database with bcrypt
const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(req.body);
    const data = {
      username,
      email,
      password: await bcrypt.hash(password, 10),
      role: "user",
      status: "active",
    };
    //saving the user
    const user = await User.create(data);

    //if user details is captured
    //generate token with the user's id and the secretKey in the env file
    // set cookie with the token generated
    if (user) {
      let token = jwt.sign({ id: user.id }, "secretKey", {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
      });

      res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
      //send users details
      return res.status(201).send(user);
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
  }
};


//login authentication

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    //find a user by their email
    const user = await User.findOne({
      where: {
        username: username,
        status: "active",
      }

    });

    //if user email is found, compare password with bcrypt
    if (user) {
      const isSame = await bcrypt.compare(password, user.password);

      //if password is the same
      //generate token with the user's id and the secretKey in the env file

      if (isSame) {
        let token = jwt.sign({ id: user.id, name: user.role }, "secretKey", {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });

        //if password matches wit the one in the database
        //go ahead and generate a cookie for the user
        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        console.log("user", JSON.stringify(user, null, 2));
        console.log(token);
        //send user data
        return res.status(201).send(user);
      } else {
        return res.status(401).send("Authentication failed");
      }
    } else {
      return res.status(401).send("Authentication failed");
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where:{
        [Op.or]: [
          {  status: "active" },
          { status: "passive" }
        ]
      }
    });
    console.log(users)
    if (users) {
      return res.status(200).send(users);
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const {username, surname, status, password } = req.body;
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (user) {
      user.status = status;
      user.username = username;
      user.surname = surname;
      user.password = await bcrypt.hash(password, 10);
      await user.save();
      return res.status(200).send(user);
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      }
    });
    if (user) {
      return res.status(200).send(user);
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (User !== null) {
      user.status = "deleted";
      await user.save();
      return res.status(201).send("User deleted successfully");
    }
    else{
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
  }
};




module.exports = {
  signup,
  login,
  getAllUsers,
  updateUser,
  getUser,
  deleteUser
};