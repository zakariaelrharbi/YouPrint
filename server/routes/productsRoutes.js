const express = require('express');
const { createProduct, updateProduct, getAllProduct, deleteProduct, getProductById } = require('../controllers/productsController');

const productRouter = express.Router();

productRouter.post('/create-product', createProduct);
productRouter.get('/getAllProduct', getAllProduct);
productRouter.get('/getProductById', getProductById);
productRouter.put('/update-product/:id', updateProduct);
productRouter.delete('/delete-product/:id', deleteProduct);




module.exports = productRouter;