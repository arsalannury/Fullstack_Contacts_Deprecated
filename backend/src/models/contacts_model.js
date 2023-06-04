const mongoose = require("mongoose");

const contacts_model = new mongoose.Schema({
  saveDevice: {
    required: false,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  number: {
    required: true,
    type: String,
  },
  background: {
    required: false,
    type: String,
  },
});

module.exports = mongoose.model("contacts", contacts_model);