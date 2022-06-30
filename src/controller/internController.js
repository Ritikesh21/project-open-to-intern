const collegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")

const createIntern = async (req, res) => {
    try{
        const data = req.body
        const newIntern = await internModel.create(data)
        if (newIntern){
            res.status(201).send({status : true,
            data : newIntern})
        }
        else{
            res.status(404).send({status : false,
            message : "Intern Not Craeated"})
        }
    }
    catch(err){
        res.status(500).send({status : false,
        Error : err})
    }
}

module.exports.createIntern = createIntern

const getCollegeWithAllIntern = async (req, res) => {
    try{
        const college = req.query
        const collegeData = await collegeModel.find(college, {_id : 0, name : 1, fullname : 1, logoLink : 1})
        if (collegeData){
            const internData = await internModel.find(collegeData[0]._id, {_id : 1, name : 1, email : 1, mobile : 1})
            if (internData){
                const data = {name : collegeData[0].name,
                            fullname : collegeData[0].fullname,
                            logoLink : collegeData[0].logoLink,
                            interns : internData}
                res.status(201).send({status : true,
                data : data})
            }
            else{
                const data = {name : collegeData[0].name,
                    fullname : collegeData[0].fullname,
                    logoLink : collegeData[0].logoLink,
                    interns : []}
                res.status(201).send({status : true,
                data : data})
            }
        }
        else{
            res.status(404).send({status : false,
            Message : "data Not Found"})
        }
    }
    catch(err){
        res.status(500).send({status : false,
            Error : err})
    }
}

module.exports.getCollegeWithAllIntern = getCollegeWithAllIntern