const collegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")

const createIntern = async (req, res) => {
    try{
        const data = req.body
        const newIntern = await internModel.create(data)
        if (newIntern){
            res.status(201).send({status : true,
            message : "Intern Craeted Successfully",
            data : newIntern})
        }
        else{
            res.status(400).send({status : false,
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
        const collegeData = await collegeModel.find(college)
        if (collegeData){
            const internData = await internModel.find(collegeData[0]._id)
            if (internData){
                let intern = []
                for (let i = 0; i < internData.length; i++){
                    let temp = {
                        _id : internData[i]._id,
                        name : internData[i].name,
                        email : internData[i].email,
                        mobile : internData[i].mobile
                    }
                    intern.push(temp)
                }
                const data = {name : collegeData[0].name,
                    fullname : collegeData[0].fullname,
                    logoLink : collegeData[0].logoLink,
                    interns : intern}
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
            res.status(400).send({status : false,
            Message : "data Not Found"})
        }
    }
    catch(err){
        res.status(500).send({status : false,
            Error : err})
    }
}

module.exports.getCollegeWithAllIntern = getCollegeWithAllIntern