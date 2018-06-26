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

  },

  isUserConnected: (req, res, next) => {
    
  }
}

module.exports = UserService
