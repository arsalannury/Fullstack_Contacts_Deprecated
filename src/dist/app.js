"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UsersInterface = require("interfaces/users.interface");
const express = require("express");
const Router = require("URL");
const fs = require("fs");
const getAllJsonData = JSON.parse(fs.readFileSync("./jsons/GetAll.json", "utf-8"));
const getUsers = JSON.parse(fs.readFileSync("./jsons/users.json", "utf-8"));
const app = express();
const port = 8000;
app.use(express.json());
app.listen(port, () => {
    console.log(`server running at port ${port}`);
});
app.get(Router.Routes.BASE_ROUTE, (req, res) => {
    res.status(200).json({
        message: "success",
        data: {
            all: getAllJsonData,
        },
    });
});
app.get(Router.Routes.USERS_ROUTE, (req, res) => {
    res.status(200).json({
        message: "success",
        data: getUsers,
    });
});
app.post(Router.Routes.USERS_ROUTE, (req, res) => {
    const body = req.body;
    if (!body.email || !body.first_name || !body.last_name) {
    }
    getUsers.users.push(req.body);
    fs.writeFile("./jsons/users.json", JSON.stringify(getUsers), () => {
        res.json({
            message: "success",
            data: req.body,
        });
    });
    res.send("api route is available");
});
