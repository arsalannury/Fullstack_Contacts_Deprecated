const express = require("express");
const {
  create_contacts,
  create_contacts_validation,
  getAll_contacts,
} = require("../controllers/contacts_controller");

const contacts_route = express.Router();
contacts_route.route("/").post(create_contacts_validation, create_contacts).get(getAll_contacts);

module.exports = contacts_route;
