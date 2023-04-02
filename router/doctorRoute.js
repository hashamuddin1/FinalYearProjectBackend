const express = require('express');
const doctorRouter = express.Router();
const { doctorSignUp,doctorSignIn,uploadDegree,activateAccount,allDoctors,searchdoctors } = require('../controller/doctorController');
const verifyToken = require("../middleware/verifyToken")

doctorRouter.post("/api/doctorSignUp", doctorSignUp);
doctorRouter.post("/api/doctorSignIn", doctorSignIn);
doctorRouter.post("/api/uploadDegree",verifyToken, uploadDegree);
doctorRouter.post("/api/activateAccount",verifyToken, activateAccount);
doctorRouter.get("/api/alldoctors",verifyToken, allDoctors);
doctorRouter.post("/api/searchdoctors",verifyToken, searchdoctors);

module.exports = doctorRouter