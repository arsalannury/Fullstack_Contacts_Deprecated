const express = require('express');
const { create_contacts } = require('../controllers/contacts_controller');

const contacts_route = express.Router();
contacts_route.route('/').get(create_contacts);

module.exports = contacts_route;