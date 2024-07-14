const express = require('express');
const {createCategory} = require('../controllers/categoryController');

const categoryRouter = express.Router();

categoryRouter.post('/create-category', createCategory);
// categoryRouter.get('/getAllCategory', getAllCategory);
// categoryRouter.get('/getCategoryById/:id', getCategoryById);
// categoryRouter.put('/update-category/:id', updateCategory);
// categoryRouter.delete('/delete-category/:id', deleteCategory);

module.exports = categoryRouter;
