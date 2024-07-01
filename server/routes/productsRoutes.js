const express = require('express');
const { createProduct, updateProduct } = require('../controllers/productsController');

const productRouter = express.Router();

productRouter.post('/create-product', createProduct);
productRouter.post('/update-product', updateProduct);




module.exports = productRouter;