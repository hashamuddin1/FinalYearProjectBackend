const express = require('express');
const scheduleRouter = express.Router();
const {doctorScheduleCreate,doctorScheduleFetch } = require('../controller/doctorScheduleController');
const verifyToken = require("../middleware/verifyToken")

scheduleRouter.post("/api/doctorScheduleCreate",verifyToken, doctorScheduleCreate);
scheduleRouter.get("/api/doctorScheduleFetch",verifyToken, doctorScheduleFetch);

module.exports = scheduleRouter