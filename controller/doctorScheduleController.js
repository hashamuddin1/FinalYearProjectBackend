const { doctorSchedules } = require("../models/doctorSchedule");
const { doctors } = require("../models/doctor");
const {ObjectId}=require("mongodb");

const doctorScheduleCreate=async(req,res)=>{
    try{

      const DoctorId=new ObjectId(req.query.doctorId)

      const checkVerifiction= await doctors.findOne({_id:DoctorId})

      if(!checkVerifiction){
        return res.status(400).send({
          success: false,
          message: "Doctor is Not Found",
        });
      }

      if(checkVerifiction.isVerified===false){
        return res.status(400).send({
          success: false,
          message: "Doctor is Not Verified",
        });
      }

    const insertSchedule=new doctorSchedules({
        day:req.body.day,
        from:req.body.from,
        to:req.body.to,
        price:req.body.price,
        doctorId:DoctorId,
    })

    await insertSchedule.save()

    return res.status(200).send({
        success: true,
        message: "Create Schedule Successfully",
        data: insertSchedule,
      });

    }catch (e) {
    console.log(e);
    return res.status(400).send({
      success: false,
      message: "Something went wrong",
    });
  }
}

const doctorScheduleFetch=async(req,res)=>{
  try{

    const checkDoctor=await doctors.findOne({_id:new ObjectId(req.query.doctorId)})

    if(!checkDoctor){
      return res.status(400).send({
        success: false,
        message: "Doctor is Not Found",
      });
    }

    const fetchSchedule=await doctorSchedules.find({doctorId:new ObjectId(req.query.doctorId)})
    
    return res.status(200).send({
      success: true,
      message: "Fetch Schedule Successfully",
      data: fetchSchedule,
    });

  }catch (e) {
    console.log(e);
    return res.status(400).send({
      success: false,
      message: "Something went wrong",
    });
  }
}

module.exports = { doctorScheduleCreate, doctorScheduleFetch};