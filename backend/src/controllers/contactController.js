"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var ContactController;
(function (ContactController) {
    function getAllContacts(req, res) {
        var dataList = fs.readFileSync("../database/contactdb.json", "utf-8");
        res.status(200).json({
            message: "success",
            data: JSON.parse(dataList),
        });
    }
    ContactController.getAllContacts = getAllContacts;
})(ContactController || (ContactController = {}));
module.exports = ContactController;
