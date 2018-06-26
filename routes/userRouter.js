const express = require('express');
const UserService = require('../services/UserService')
const router = express.Router();

/* GET home page. */
router.get('/connect', UserService.getUser);

module.exports = router;
