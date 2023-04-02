const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
require('./config/db');
const fileUpload=require('express-fileupload');
const userRouter = require('./router/userRoute')
const doctorRouter = require('./router/doctorRoute')
const scheduleRouter = require('./router/doctorSchedule')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
  useTempFiles:true
}))
app.use([userRouter,doctorRouter,scheduleRouter])

app.listen(port, () => {
  console.log(`Our Server is running at port ${port} in Development Environment`);
});