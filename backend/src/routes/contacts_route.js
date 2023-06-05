const express = require("express");
const {
  create_contacts,
  create_contacts_validation,
  getAll_contacts,
  get_contacts_by_id,
} = require("../controllers/contacts_controller");

const contacts_route = express.Router();
contacts_route.route("/").post(create_contacts_validation, create_contacts).get(getAll_contacts);
contacts_route.route("/:id").get(get_contacts_by_id);

module.exports = contacts_route;
