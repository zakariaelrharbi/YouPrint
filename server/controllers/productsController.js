const Product = require('../models/productModal');

// Create a new product
const createProduct = async (req, res) => {
    const { productName, description, image, quantity, categories, size, color, price, inStock } = req.body;

    if (!productName || !description || !image || !quantity || !price) {
        return res.status(400).json({
            message: 'All fields are required',
            error: true,
            success: false,
        });
    }
    try {
        const newProduct = new Product({ productName, description, image, quantity, categories, size, color, price, inStock });
        await newProduct.save();
        return res.status(200).json({
            message: 'Product created successfully',
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
// Get all products
const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json({
            products,
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

// Update a product
const updateProduct = async (req, res) => {
    const product_id = req.params.id;
    const { productName, description, image, quantity, categories, size, color, price, inStock } = req.body;

    try {
        const product = await Product.findById(product_id);
        if (!product) {
            return res.status(404).json({
                message: 'Product not found',
                error: true,
                success: false,
            });
        }

        await Product.findByIdAndUpdate(product_id, {
            productName,
            description,
            image,
            quantity,
            categories,
            size,
            color,
            price,
            inStock
        });

        return res.status(200).json({
            message: 'Product updated successfully',
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



module.exports = { createProduct, updateProduct, getAllProduct };