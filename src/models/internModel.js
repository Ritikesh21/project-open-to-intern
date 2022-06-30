const mongoose = require('mongoose')

const internSchema = new mongoose.Schema({
    name: {
        type: "String",
        require: true,
        trim: true,
    },
    email: {
        type: "String",
        required: true, 
        lowercase: true,
        trim: true,
        unique: true,
    },
    mobile: {
        type: "Number",
        required: true,
        unique: true
    },
    collegeId: {
        type: "objectId",
        ref: "College"
    },
    isDeleted: { type: "Boolean", default: false }
},
{
    timestamps : true
})

module.exports = mongoose.model("internModel", internSchema)