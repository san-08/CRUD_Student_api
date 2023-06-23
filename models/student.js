const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollno:{
        type:String,
        required:true

    },
    age:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('student',studentSchema)