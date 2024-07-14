const Category = require('../models/categoryModal');

// Create a new category
const createCategory = async (req, res) =>{
    const {categoryName, description} = req.body;
    if(!categoryName || !description){
        return res.status(400).json({
            message: 'All field are required',
            error: true,
            success: false,
        })
    }
    try {
        const newCategory = new Category ({categoryName, description});
        await newCategory.save();
        return res.status(200).json({
            message: 'category created successfully',
            error: false,
            success: true,
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            error: true,
            succwss: false,
        })
    }
}

// update category
const updateCategory = async (req, res) =>{
    const category_Id = req.params.id;
    const {categoryName, description}= req.body;
    
}

module.exports = {createCategory};

