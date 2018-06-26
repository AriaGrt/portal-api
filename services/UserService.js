const mongoose = require('mongoose');
const User = require('../models/User')
const AuthenticationService = require('./AuthenticationService')
const jwt = require('jsonwebtoken')

const UserService = {

  getUser: (req, res, next) => {
    let user = {
      email: "aria.groult@outlook.fr",
      password: "azerty"
    }

    if(typeof(user.email) !== undefined && typeof(user.password) !== undefined){
      User.findOne({email: user.email}, (err, foundUser) => {
        if(err) throw err
        UserService.connect(req, res, next, foundUser)
      })
    }else{
      console.log('missing user infos')
    }
  },

  connect: (req, res, next, user) => {
    let userData = {
      email: user.email
    }
    let userToken = AuthenticationService.getUserToken(userData)
    req.session.userToken = userToken;
    res.sendStatus(200)
  },

  isUserConnected: (req, res, next) => {
    //TEST VALUES
    let user = {
      email: "aria.groult@outlook.fr",
      password: "azerty"
    }
    let token = jwt.sign(user, 'shhhh'); // Change secret
    //TO DELETE
    let userData = AuthenticationService.decodeUserToken(token)

    if(typeof(userData.email) !== undefined && userData.email !== "")
    {
      // ADD correct http code for authentification done
    }
  }
}

module.exports = UserService
