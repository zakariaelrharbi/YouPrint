const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const userSignup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({
            message: 'All fields are required',
            error: true,
            success: false,
        });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ 
            message: 'User already exists',
            error: true,
            success: false,
        });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        return res.status(200).json({
            message: 'User created successfully',
            error: false,
            success: true,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            error: true,
            success: false,
        });
    }
};

const userSignin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: 'All fields are required',
            error: true,
            success: false,
        });
    }

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return res.status(400).json({
                message: 'Email not found',
                error: true,
                success: false,
            });
        }

        const validPassword = await bcrypt.compare(password, validUser.password);
        if (!validPassword) {
            return res.status(400).json({
                message: 'Invalid password',
                error: true,
                success: false,
            });
        }

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        const { password: userPassword, ...rest } = validUser._doc;
        return res.status(200)
            .cookie('access_token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
            .json({
                user: rest,
                message: 'Signin successful',
                error: false,
                success: true,
            });

    } catch (error) {
        return res.status(500).json({
            message: 'Server error',
            error: true,
            success: false,
        });
    }
};

const google = async (req, res) => {
    const { name, email, googlePhotoURL } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            const { password, ...rest } = user._doc;
            return res.status(200)
                .cookie('access_token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
                .json({
                    user: rest,
                    message: 'Signin successful',
                    error: false,
                    success: true,
                });
        } else {
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = await bcrypt.hash(generatedPassword, 10);
            const newUser = new User({
                username: 
                name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
                email,
                password: hashedPassword,
                profilePicture: googlePhotoURL,
            });
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
            const { password, ...rest } = newUser._doc;
            return res.status(200)
                .cookie('access_token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
                .json({
                    user: rest,
                    message: 'Signin successful',
                    error: false,
                    success: true,
                });
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Server error',
            error: true,
            success: false,
        });
    }
};


const userSignout = (req, res) => {
};

module.exports = { userSignup, userSignin, google, userSignout };
