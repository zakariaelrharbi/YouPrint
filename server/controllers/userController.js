const User = require('../models/userModel');
const bcrypt = require('bcrypt');

// create user
 const createUser = async (req, res) => {
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
}

// get all users
const getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        // if there are no users
        if (!users) {
            return res.status(404).json({
                message: 'No user found',
                error: true,
                success: false,
            });
        }
        return res.status(200).json({
            message: 'users found successfully', 
            users,
            error: false,
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            error: true,
            success: false,       
        });
    }
};


module.exports = {getAllUser, createUser};