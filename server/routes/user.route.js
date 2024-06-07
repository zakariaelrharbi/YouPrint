const express = require('express');
const { userSignout } = require('../controllers/authController');

const router = express.Router();

router.post('/signout', userSignout);

export default router;