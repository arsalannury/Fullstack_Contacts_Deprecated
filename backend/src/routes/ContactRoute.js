const expressContact = require("express");
const { getAllContact } = require("../controllers/ContactController");

const router = expressContact.Router();

router.route("/").get(getAllContact);

module.exports = router;
