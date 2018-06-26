const jwt = require('jsonwebtoken')

const AuthenticationService = {
    getUserToken: (user) => {
      token = jwt.sign(user, 'shhhh'); // Change secret
      return token
    },

    decodeUserToken: (token) => {
      let isConnected = jwt.verify(token, 'shhhh')
      return isConnected
    }
};

module.exports = AuthenticationService
