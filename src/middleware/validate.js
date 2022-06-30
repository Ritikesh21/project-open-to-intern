const {body, validationResult, check} = require('express-validator');
const { default: mongoose } = require('mongoose');
const collegeModel = require('../models/collegeModel');

const collegeValidateSchema = [
    body('name')
    .exists()
    .withMessage("Please Enter the name")
    .isString()
    .withMessage("Please Enter the String")
    .isAlpha()
    .withMessage('Please Enter the Alphabets Only')
    .notEmpty()
    .withMessage("The name should contain only letters and should be unique."),
    body('fullName')
    .exists()
    .withMessage('Please Enter the fullname')
    .isString()
    .withMessage('Please Enter the String')
    .notEmpty()
    .withMessage('Please Enter Some Content'),
    body('logoLink')
    .exists()
    .withMessage('Please Enter the logoLink')
    .isString()
    .withMessage('Please Enter the String')
    .notEmpty()
    .withMessage('Please Enter Some Content'),
    body('isDeleted')
    .isBoolean()
    .withMessage('Please Enter the true/false')
]

module.exports.collegeValidateSchema = collegeValidateSchema

const internValidateSchema = [
  body('name')
  .exists()
  .withMessage("Please Enter the name"),
  body('name')
  .isString()
  .withMessage("Please Enter the String")
  .isAlpha()
  .withMessage("Please Enter Alphabets only")
  .notEmpty()
  .withMessage("The name should contain only letters and should be unique."),
  body('email')
  .isEmail()
  .withMessage("Please Enter the Correct Email")
  .exists()
  .withMessage('Please Enter The email')
  .isString()
  .withMessage('Please Enter the email in String'),
  body('mobile')
  .exists()
  .withMessage('Please Enter the Mobile Number')
  .isInt()
  .withMessage('Please Enter the Mobile Number in Integer')
  .isMobilePhone()
  .withMessage('Please Enter a valid Mobile Number')
  .isLength({
    min : 10,
    max : 10
  })
  .withMessage('Please Enter The Mobile Number Containing 10 digits'),
  body('collegeId')
  .exists()
  .withMessage('Please Enter the CollegeId')
  .isString()
  .withMessage('Please Enter collegeId in String Type'),
  body('isDeleted')
  .isBoolean()
  .withMessage('Please Enter the true/false')
]

module.exports.internValidateSchema = internValidateSchema

const getCollegeWithAllInternValidation = [
  check('name')
  .exists()
  .withMessage('Please Enter The College Name')
  .isString()
  .withMessage('Please Enter The College Name in String')
]

module.exports.getCollegeWithAllInternValidation = getCollegeWithAllInternValidation

const validatorError = async (req, res, next) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}

module.exports.validatorError = validatorError