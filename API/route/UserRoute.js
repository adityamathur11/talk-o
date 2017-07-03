/**
 * Created by Aditya on 03-Jul-17.
 */
const express = require('express');
let userRouter = express.Router();
const userController = require('../controller/UserController');
userRouter.get('/createUser' , userController.createNewUser);
module.exports = userRouter;