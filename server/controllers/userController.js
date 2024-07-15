const User = require('../models/userModel');


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


module.exports = {getAllUser};