"use strict";

var _require = require('express-validator'),
    body = _require.body,
    validationResult = _require.validationResult;

var _require2 = require('mongoose'),
    mongoose = _require2["default"];

var collegeModel = require('../models/collegeModel');

var collegeValidateSchema = [body('name').exists().withMessage("Please Enter the value").isString().withMessage("Please Enter the String").isAlpha().notEmpty().withMessage("The name should contain only letters and should be unique.")
/*.custom(value => {
   return collegeModel.findOne({ where: {name: value} })
      .then(() => {
         return Promise.reject('Name already taken')
      })
})*/
, body('fullname').exists().withMessage('Please Enter the Value').isString().withMessage('Please Enter the String').notEmpty()];

var validatorError = function validatorError(req, res, next) {
  var errors;
  return regeneratorRuntime.async(function validatorError$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          errors = validationResult(req);

          if (errors.isEmpty()) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            errors: errors.array()
          }));

        case 3:
          next();

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports.collegeValidateSchema = collegeValidateSchema;
module.exports.validatorError = validatorError;