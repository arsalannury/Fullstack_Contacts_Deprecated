const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const getAllData = fs.readFileSync("db/contact.json", "utf-8");

exports.getAllContact = (req, res, next) => {
  res.status(200).json({
    message: "success",
    data: JSON.parse(getAllData),
  });
  next();
};

exports.getContactById = (req, res, next) => {
  const { id } = req.params.id;

  const getDataById = JSON.parse(getAllData).data.filter((cont) => cont.id === id);

  res.json({
    message: "success",
    results: getDataById.length,
    data: getDataById,
  });
  next();
};

function validateDuplicateDatas(req) {
  const body = req.body;
  for (const find of JSON.parse(getAllData).data) {
    if ((find.fName === body.fName && find.lName === body.lName) || find.number === body.number) {
      return true;
    } else {
      return false;
    }
  }
}

exports.createContact = (req, res, next) => {
  if (!req.body || !req.body.number || !req.body.fName || !req.body.lName) {
    return res.status(400).send("missing some properties");
  }

  if (validateDuplicateDatas(req) === true) {
    return res.status(500).send("contact is already exist");
  }

  const appendId = {
    ...req.body,
    id: uuidv4(),
  };

  const contacts = JSON.parse(getAllData);
  contacts.data.push(appendId);

  fs.writeFile("db/contact.json", JSON.stringify(contacts), () => {
    res.status(201).json({
      message: "success",
      result: "created contact",
    });
    next();
  });
};

exports.removeContact = (req, res, next) => {
  const { id } = req.params;
  const filterContacts = JSON.parse(getAllData).data.filter((cont) => cont.id !== id);
  const finalStructJSON = {
    data: filterContacts,
  };

  fs.writeFile("db/contact.json", JSON.stringify(finalStructJSON), () => {
    res.status(200).send("data removed sucessfully");
    next();
  });
};

exports.updateContact = (req, res, next) => {
  const body = req.body;
  const { id } = req.params;

  if (!body.fName && !body.lName && !body.number) {
    return res.status(400).send("miss some properties");
  }

  const filterContacts = JSON.parse(getAllData).data.map((cont) => {
    if (cont.id === id) {
      const updated = { ...cont, ...req.body };
      cont = updated;
    }
    return cont;
  });

  const finalStructJSON = {
    data: filterContacts,
  };

  fs.writeFile("db/contact.json", JSON.stringify(finalStructJSON), () => {
    res.status(200).json({
      message: "success",
      result: "contact updated successfully",
    });
    next();
  });
};
