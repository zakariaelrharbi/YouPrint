const Category = require('../models/categoryModal');

// Create a new category
const createCategory = async (req, res) =>{
    const {catergoryName, description, image} = req.body;
    if(!catergoryName || !description){
        return res.status(400).json({
            message: 'All field are required',
            error: true,
            success: false,
        })
    }

    try {
        const newCategory = new Category ({catergoryName, description, image});
        await newCategory.save();
        return res.status(200).json({
            message: 'category created successfully',
            error: false,
            success: true,
        })
    } catch (error) {
        
    }
}
