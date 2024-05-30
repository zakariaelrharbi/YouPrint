const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userSignin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }
        if (!password) {
            return res.status(400).json({ message: 'Password is required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ 
                message: 'User not found',
                error: true,
                success: false,
            });
        }

        const chekedPassword = await bcrypt.compare(password, user.password);
        if (!chekedPassword) {
            return res.status(400).json({ 
                message: 'Invalid password',
                error: true,
                success: false,
            });
        } else {
            if (!process.env.JWT_SECRET) {
                throw new Error('JWT_SECRET is not defined');
            }

            const tokenData = {
                _id: user._id,
                email: user.email,
            };
            const token = await jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '1d' });

            const tokenOptions = {
                httpOnly: true,
                secure: true,
            };

            res.cookie('token', token, tokenOptions).status(200).json({
                message: 'User Login successfully',
                data: token,
                error: false,
                success: true,
            });
        }
    } catch (error) {
        res.json({
            message: error.message || 'Internal Server Error',
            error: true,
            success: false,
        });
    }
};

module.exports = userSignin;
