const express = require('express');
const doctorRouter = express.Router();
const { doctorSignUp,doctorSignIn,uploadDegree,activateAccount } = require('../controller/doctorController');

doctorRouter.post("/api/doctorSignUp", doctorSignUp);
doctorRouter.post("/api/doctorSignIn", doctorSignIn);
doctorRouter.post("/api/uploadDegree", uploadDegree);
doctorRouter.post("/api/activateAccount", activateAccount);

module.exports = doctorRouter