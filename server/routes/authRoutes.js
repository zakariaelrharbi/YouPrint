const express = require('express');
const { userSignup, userSignin, google, userSignout, ResetPassword} = require('../controllers/authController');

const router = express.Router();

router.post('/signup', userSignup);
router.post('/signin', userSignin);
router.post('/google', google);
router.post('/signout', userSignout);
router.post('/forget-password', ResetPassword);




module.exports = router;