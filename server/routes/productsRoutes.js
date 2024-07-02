const express = require('express');
const { createProduct, updateProduct, getAllProduct, deleteProduct } = require('../controllers/productsController');

const productRouter = express.Router();

productRouter.post('/create-product', createProduct);
productRouter.get('/getAllProduct', getAllProduct);
productRouter.put('/update-product/:id', updateProduct);
productRouter.put('/delete-product/:id', deleteProduct);




module.exports = productRouter;