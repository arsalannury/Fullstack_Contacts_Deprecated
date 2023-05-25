const express_app = require("express");
const { get_all_favorites_handler } = require("../controllers/favorites_controller");

const favorite_route = express_app.Router();

favorite_route.route("/").get(get_all_favorites_handler);

module.exports = favorite_route;
