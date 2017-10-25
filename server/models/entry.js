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
    type: String,
    required: true
  },
  bikes: {
    type: String,
    required: true
  },
  contactme: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Entry', EntrySchema);
