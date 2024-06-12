const express = require('express');
const { userSignup, userSignin, google, userSignout, ResetPassword, ForgotPassword} = require('../controllers/authController');

const router = express.Router();

router.post('/signup', userSignup);
router.post('/signin', userSignin);
router.post('/google', google);
router.post('/signout', userSignout);
router.post('/forget-password', ForgotPassword);
router.get('/reset-password', ResetPassword);




module.exports = router;