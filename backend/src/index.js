var express = require("express");
var contact = require("./routes/contactRoute");
var application = express();
application.use(express.json());
application.use("/contacts", contact);
module.exports = application;
