const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const userSignin = async (req, res) => {
    try {
        const  { email, password } = req.body;
        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }
        if (!password) {
            return res.status(400).json({ message: 'Password is required' });
        }
        const user = await User.findOne({ email})
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const chekedPassword = bcrypt.compareSync(password, user.password);
    } catch (error) {
         res.json({
            message: error.message || 'Internal Server Error',
            error: true,
            success: false,
        });
    }
}