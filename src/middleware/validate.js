const {body, validationResult} = require('express-validator');
const { default: mongoose } = require('mongoose');
const collegeModel = require('../models/collegeModel');

const collegeValidateSchema = [
    body('name')
    .exists()
    .withMessage("Please Enter the value")
    .isString()
    .withMessage("Please Enter the String")
    .isAlpha()
    .notEmpty()
    .withMessage("The name should contain only letters and should be unique.")
    /*.custom(value => {
       return collegeModel.findOne({ where: {name: value} })
          .then(() => {
             return Promise.reject('Name already taken')
          })
    })*/,
    body('fullname')
    .exists()
    .withMessage('Please Enter the Value')
    .isString()
    .withMessage('Please Enter the String')
    .notEmpty(),
    body('logoLink')
    .exists()
    .withMessage('Please Enter the Value')
    .isString()
    .withMessage('Please Enter the String')
    .notEmpty(),
    body('isDeleted')
    .isBoolean()
    .withMessage('Please Enter the true/false')
]

const validatorError = async (req, res, next) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}

module.exports.collegeValidateSchema = collegeValidateSchema

module.exports.validatorError = validatorError