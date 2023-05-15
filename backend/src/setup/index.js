const express = require("express");
const contactRoute = require("../routes/ContactRoute");

const app = express();
app.use(express.json());
app.use("/contacts", contactRoute);
module.exports = app;
