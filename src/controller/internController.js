const collegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")

const createIntern = async (req, res) => {
    try{
        const data = req.body
        const collegeName = data.collegeName
        const college = await collegeModel.findOne({name : collegeName})
        console.log(college)
        const finalData = {name : data.name,
                        email : data.email,
                        mobile : data.mobile,
                        collegeId : college._id,
                        isDeleted : data.isDeleted}
        console.log(finalData)
        const newIntern = await internModel.create(finalData)
        if (newIntern){
            res.status(201).send({status : true,
            data : finalData})
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
        const collegeData = await collegeModel.find(college, {_id : 0, name : 1, fullName : 1, logoLink : 1})
        if (collegeData){
            const internData = await internModel.find(collegeData[0]._id, {_id : 1, name : 1, email : 1, mobile : 1})
            if (internData){
                const data = {name : collegeData[0].name,
                            fullName : collegeData[0].fullName,
                            logoLink : collegeData[0].logoLink,
                            interns : internData}
                res.status(201).send({status : true,
                data : data})
            }
            else{
                const data = {name : collegeData[0].name,
                    fullName : collegeData[0].fullName,
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