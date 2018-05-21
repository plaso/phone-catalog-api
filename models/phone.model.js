const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The phone name is required']
  },
  description: {
    type: String,
    required: [true, 'The description is required']
  },
  img: {
    type: String,
    required: [true, 'The phone image is required']
  },
  color: {
    type: String,
    required: [true, 'The phone color is required']
  },
  price: {
    type: Number,
    required: [true, 'The phone price is required']
  },
  size: {
    type: String,
    required: [true, 'The phone screen size is required']
  }
}, { 
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

const Phone = mongoose.model('Phone', phoneSchema);
module.exports = Phone;