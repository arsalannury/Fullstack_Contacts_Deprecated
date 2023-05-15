const express = require("express");
const contact = require("../routes/contactRoute");

const application = express();
application.use(express.json());

application.use("/contacts", contact);

module.exports = application;
