const contactExpress = require("express");
const ContactController = require("../controllers/contactController");

const contactRouter = contactExpress.Router();
contactRouter.route("/").get(ContactController.getAllContacts);
// .post('').put('').delete('')

module.exports = contactRouter;
