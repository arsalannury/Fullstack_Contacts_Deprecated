const mongoose = require("mongoose");
const ContactModel = require("../models/contacts_model");

exports.create_contacts_validation = (req, res, next) => {
  if (
    req.body.name === undefined ||
    req.body.number === undefined ||
    req.body.background === undefined
  ) {
    res.status(400).send("bad request recieved");
  } else {
    next();
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
    const saveTodb = await dataSaved.save();
    res.status(200).json(saveTodb);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  next();
};
