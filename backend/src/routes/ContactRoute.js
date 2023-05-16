const expressContact = require("express");
const {
  getAllContact,
  getContactById,
  createContact,
  removeContact,
  updateContact,
} = require("../controllers/ContactController");

const router = expressContact.Router();

router.route("/").get(getAllContact).post(createContact);
router.route("/:id").get(getContactById).delete(removeContact).put(updateContact);

module.exports = router;
