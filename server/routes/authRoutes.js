const express = require('express');
const { userSignup, userSignin, google} = require('../controllers/authController');

const router = express.Router();

router.post('/signup', userSignup);
router.post('/signin', userSignin);
router.post('/google', google);



module.exports = router;