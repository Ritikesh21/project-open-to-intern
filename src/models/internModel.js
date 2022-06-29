const mongoose = require('mongoose')

const internSchema = new mongoose.Schema({
    name : {
        type : "String",
        required : true
    },
    email : {
        type : "String",
        required : true,
        unique : true
        //match : []
    },
    mobile : {
        type : "Number",
        required : true,
        unique : true
        //match : []
    },
    collegeId : {
        type : "Object",
        required : true
    },
    isDeleted : {
        type : "Boolean",
        default : false
    }
},
{
    timestamps : true
})

module.exports = mongoose.model("internModel", internSchema)