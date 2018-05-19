const mongoose = require('mongoose');
const Phone = require('../models/phone.model');
const ApiError = require('../models/api-error.model');

module.exports.list = (req, res, next) => {
  Phone.find()
    .then(phones => {
      res.json(phones);
    })
    .catch(error => next(error));
}

module.exports.create = (req, res, next) => {
  const phone = new Phone(req.body);
  phone.save()
    .then(() => {
      res.status(201).json(phone);
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        next(new ApiError(error.errors));
      } else {
        next(new ApiError(error.message, 500));
      }
    })
}