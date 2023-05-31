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
    required: true,
    type: String,
  },
});
