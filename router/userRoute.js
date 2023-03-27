const express = require('express');
const userRouter = express.Router();

const { userSignUp,userSignIn } = require('../controller/userController');

userRouter.post("/api/userSignUp", userSignUp);
userRouter.post("/api/userSignIn", userSignIn);

module.exports = userRouter