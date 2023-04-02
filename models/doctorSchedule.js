const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schedule_schema = new mongoose.Schema({
    day: {
        type: String,
        trim: true,
        required: true,
        enum:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    },
    time: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        trim: true,
        required: true,
        enum:["Onsite","Online"]
    },
    price: {
        type: Number,
        trim: true,
        required: true,
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: "doctors"
    },
    location: {
        type: String,
        trim: true,
        required: true,
    },

})

//creating collection
const doctorSchedules = new mongoose.model('doctorSchedules', schedule_schema)

//export collection
module.exports = { doctorSchedules };