const express = require('express');
const User = require('../services/User')
const router = express.Router();

/* GET home page. */
router.get('/connect', User.connect);

module.exports = router;
