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
// Get all categories
const getAllCategory = async (req, res) =>{
    try {
        const categories = await Category.find();
        return res.status(200).json({
            categories,
            error: false,
            success: true,
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            error: true,
            success: false,
        })
    }
}
// Get a single category by id

const getCategoryById = async (req, res) =>{
    const category_Id = req.params.id;
    try {
        const category = await Category.findById(category_Id);
        if (!category){
            return res.status(404).json({
                message: 'category not found',
                error: true,
                success: false,
            })
        }
        return res.status(200).json({
            category,
            error: false,
            success: true,
        })
    }
    catch (error) {
        return res.status(500).json({
            message: error.message,
            error: true,
            success: false,
        })
    }
}

// update category
const updateCategory = async (req, res) =>{
    const category_Id = req.params.id;
    const {categoryName, description}= req.body;
    try {
        const category = await Category.findById(category_Id);
        if (!category){
            return res.status(404).json({
                message: 'category not found',
                error: true,
                success: false,
            })
        }
        if(!categoryName || !description){
        return res.status(400).json({
            message: 'All field are required',
            error: true,
            success: false,
        })
    }
        await Category.findByIdAndUpdate(category_Id, {categoryName, description});
        return res.status(200).json({
            message: 'category updated successfully',
            error: false,
            success: true,
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            error: true,
            success: false,
        })
    }
}

// delete category
const deleteCategory = async (req, res) =>{
    const category_Id = req.params.id;
    try {
        const category = await Category.findById(category_Id);
        if (!category){
            return res.status(404).json({
                message: 'category not found',
                error: true,
                success: false,
            })
        }
        await Category.findByIdAndDelete(category_Id);
        return res.status(200).json({
            message: 'category deleted successfully',
            error: false,
            success: true,
        })
    }
    catch (error) {
        return res.status(500).json({
            message: error.message,
            error: true,
            success: false,
        })
    }
}

module.exports = {createCategory, getAllCategory, getCategoryById, updateCategory, deleteCategory};

