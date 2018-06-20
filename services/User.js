const mongoose = require('mongoose');
const User = require('../models/User')

module.exports = {

  connect: (req, res, next) => {

  },

  getUser: (req, res, next) => {

    let user = {
      email: "aria.groult@outlook.fr",
      password: "azerty"
    }

    User.findOne({email: user.email}, (err, user) => {
      if(err) throw err
      console.log(user)
    })
  }
}
