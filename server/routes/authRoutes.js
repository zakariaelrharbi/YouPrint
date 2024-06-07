const express = require('express');
const { userSignup, userSignin, google, userSignout} = require('../controllers/authController');

const router = express.Router();

router.post('/signup', userSignup);
router.post('/signin', userSignin);
router.post('/google', google);
router.post('/signout', userSignout);




module.exports = router;