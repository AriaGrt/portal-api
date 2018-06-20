const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    email: 'string',
    password: 'string'
  }
);

module.exports = mongoose.model('user', schema);
