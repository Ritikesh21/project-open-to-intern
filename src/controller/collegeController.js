const collegeModel = require("../models/collegeModel")
const {body, validationResult} = require('express-validator')

const createCollege = async (req, res) => {
    try{
        const data = req.body
        const newCollege = await collegeModel.create(data)
        if(newCollege){
            res.status(201).send({status : true,
            message : "College Created Successfully",
            data : newCollege})
        }
        else{
            res.status(404).send({status : false,
            message : "College Not Created"})
        }
    }
    catch(err){
        res.status(500).send({status : false,
        Error : err})
    }
}

module.exports.createCollege = createCollege