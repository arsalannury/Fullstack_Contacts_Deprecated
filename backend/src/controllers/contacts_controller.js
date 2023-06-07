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

exports.getAll_contacts = async (req, res, next) => {
  try {
    const findAll = await ContactModel.find();
    res.status(200).json({
      message: "success",
      data: findAll,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  next();
};

exports.get_contacts_by_id = async (req, res, next) => {
  const id = req.params.id;
  try {
    const findContact = await ContactModel.findById(id);
    res.status(200).json({
      message: "success",
      data: findContact,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  next();
};

exports.update_contact_by_id = async (req, res, next) => {
  const id = req.params.id;
  try {
    const findById = await ContactModel.findByIdAndUpdate(id, req.body,{timestamps: true});
    res.status(200).json({
      message: "success",
      data: findById,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  next();
};
