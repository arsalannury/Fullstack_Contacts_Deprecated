const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const favorite_route = require("../routes/favorites_route");

const corsOriginOption = {
  origin: "http://localhost:8000",
};
dotenv.config({ path: "./config.env" });

const application = express();
application.use(express.json());
application.use(cors(corsOriginOption));
application.use("/favorites", favorite_route);

module.exports = application;
