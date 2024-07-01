const express = require('express');
const { createProduct, updateProduct, getAllProduct } = require('../controllers/productsController');

const productRouter = express.Router();

productRouter.post('/create-product', createProduct);
productRouter.get('/getAllProduct', getAllProduct);
productRouter.put('/update-product/:_id', updateProduct);




module.exports = productRouter;