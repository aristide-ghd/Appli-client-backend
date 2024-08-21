const mongoose = require('mongoose');

const customersSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: false
  },
  last_name: {
    type: String,
    required: false,
    uppercase: true
  },
  mail_address: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone_number: {
    type: String,
    required: true,
    unique: true
  },
  data: {
    card_number: {
      type: Number,
      required: false
    },
    city: {
      type: String,
      required: false
    },
    country: {
      type: String,
      required: false
    },
    birthday: {
      type: Date,
      required: false
    }
  },
  additionnal_data: {
    customer_cat: {
      type: String,
      required: false,
      enum: ['GOLD', 'PREMIUM', 'SILVER', 'IRON']
    },
    family: {
      father: {
        type: String,
        required: false
      },
      mother: {
        type: String,
        required: false
      },
      sister: {
        type: String,
        required: false
      }
    }
  }
});

module.exports = mongoose.model('Customers', customersSchema);
