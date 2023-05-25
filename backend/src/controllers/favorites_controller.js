const fs = require("fs");


exports.get_all_favorites_handler = (req, res) => {
    const getDB = fs.readFileSync("./favorites.json", "utf-8");
  if (req.header.accessToken) {
    return res.status(200).json({
      message: "success",
      data: JSON.parse(getDB),
    });
  }
  res.status(401).send("missing access token");
};
