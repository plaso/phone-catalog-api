const mongoose = require('mongoose');
const Phone = require('../models/phone.model');

module.exports.list = (req, res, next) => {
  Phone.find()
    .then(phones => {
      res.json(phones);
    })
    .catch(error => next(error));
}