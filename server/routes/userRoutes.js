const express = require('express');
const {createUser ,getAllUser } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/create-user', createUser);
userRouter.get('/getAllUser', getAllUser);
// userRouter.get('/getUserById/:id', getUserById);
// userRouter.put('/update-user/:id', updateUser);
// userRouter.delete('/delete-user/:id', deleteUser);

module.exports = userRouter;