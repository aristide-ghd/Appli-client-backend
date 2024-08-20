const mongoose = require('mongoose');

const customersSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: false
  },
  last_name: {
    type: String,
    required: false
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
      required: false
    },
    family: {
      father: {
        type: String
      },
      mother: {
        type: String
      },
      sister: {
        type: String
      }
    }
  }
});

module.exports = mongoose.model('Customers', customersSchema);
