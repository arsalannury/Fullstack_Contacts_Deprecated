const express = require("express");
const Router = require("./URL");
const fs = require("fs");

const getAllJsonData = JSON.parse(
  fs.readFileSync("./jsons/GetAll.json", "utf-8")
);

const getUsers = JSON.parse(fs.readFileSync("./jsons/users.json", "utf-8"));

const app = express();
const port = 8000;
app.use(express.json());

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});

app.get(Router.Routes.BASE_ROUTE, (req: any, res: any) => {
  res.status(200).json({
    message: "success",
    data: {
      all: getAllJsonData,
    },
  });
});

app.get(Router.Routes.USERS_ROUTE, (req: any, res: any) => {
  res.status(200).json({
    message: "success",
    data: getUsers,
  });
});

app.post(Router.Routes.USERS_ROUTE, (req: any, res: any) => {
  getUsers.users.push(req.body);
  fs.writeFile("./jsons/users.json", JSON.stringify(getUsers), () => {
    res.json({
      message: "success",
      data: req.body,
    });
  });
  res.send("api route is available");
});
