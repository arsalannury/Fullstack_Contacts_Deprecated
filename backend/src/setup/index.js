const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const contacts_route = require("../routes/contacts_route");

const corsOriginOption = {
  origin: "http://localhost:8000",
};
dotenv.config({ path: "./config.env" });
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database connected");
});

const application = express();
application.use(express.json());
application.use(cors(corsOriginOption));
application.use("/contacts", contacts_route);

module.exports = application;
