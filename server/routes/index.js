const express = require('express');
const userSignup = require('../controllers/userSignup');
const userSignin = require('../controllers/userSignin');

const router = express.Router();

router.post('/signup', userSignup);
router.post('/signin', userSignin);

module.exports = router;