import { Request, Response } from "express";
const fs = require("fs");

namespace ContactController {
  export function getAllContacts(req: Request, res: Response) {
    const dataList = fs.readFileSync(
      "../database/contactdb.json",
      "utf-8"
    );

    res.status(200).json({
      message: "success",
      data: JSON.parse(dataList),
    });
  }
}

module.exports = ContactController;
