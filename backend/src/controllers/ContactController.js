const fs = require("fs");

const getAllData = fs.readFileSync("../db/contact.json", "utf-8");

exports.getAllContact = (req, res, next) => {
  res.status(200).json({
    message: "success",
    data: JSON.parse(getAllData),
  });
  next();
};
