const express = require('express')
const router = express.Router()
const middleware = require('../middleware/validate')

const collegeController = require("../controller/collegeController")
router.post("/functionup/colleges", middleware.collegeValidateSchema, middleware.validatorError, collegeController.createCollege)

const internController = require("../controller/internController")
router.post("/functionup/interns", internController.createIntern)

router.get("/functionup/collegeDetails", internController.getCollegeWithAllIntern)

module.exports = router