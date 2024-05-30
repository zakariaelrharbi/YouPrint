const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const userSignup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username) {
            return res.status(400).json({ message: 'Username is required' });
        }
        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }
        if (!password) {
            return res.status(400).json({ message: 'Password is required' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ 
                message: 'User already exists',
                error: true,
                success: false,
            });
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const payload = {
            ...req.body,
            role: 'GENERAL',
            password: hashedPassword,
        };
        const newUser = new User(payload);

        await newUser.save();
        res.status(201).json({
            message: 'User created successfully',
            error: false,
            success: true,
        });

    } catch (error) {
        res.json({
            message: error.message || 'Internal Server Error',
            error: true,
            success: false,
        });
    }
};

module.exports = userSignup;
