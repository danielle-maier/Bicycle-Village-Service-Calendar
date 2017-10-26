const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  servicedate: {
    type: Date,
    required: true
  },
  bikes: {
    type: Number,
    default: 1,
    required: true
  },
  contactme: {
    type: Boolean,
    default: true,
    required: true
  }
});

module.exports = mongoose.model('Entry', EntrySchema);
