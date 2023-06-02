const mongoose = require("mongoose");
const ContactModel = require("../models/contacts_model");

exports.create_contacts_validation = (req, res) => {
  if (!req.body.name || !req.body.number || !req.body.background) {
    return res.status(400).send("bad request recieved");
  }
};

exports.create_contacts = async (req, res, next) => {
  const dataSaved = new ContactModel({
    saveDevice: req.body.saveDevice,
    name: req.body.name,
    number: req.body.number,
    background: req.body.background,
  });

  try {
    const saveTodb = dataSaved.save();
    return res.status(200).json(saveTodb);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
