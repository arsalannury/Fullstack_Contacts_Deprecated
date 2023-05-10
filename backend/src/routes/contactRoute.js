var contactExpress = require("express");
var ContactController = require("../controllers/contactController");
var contactRouter = contactExpress.Router();
contactRouter.route("/").get(ContactController.getAllContacts);
// .post('').put('').delete('')
module.exports = contactRouter;
