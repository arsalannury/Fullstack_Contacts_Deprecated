"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const fs = require("fs");
const port = 8000;
const app = express();
app.use(express.json());
const readBasePage = fs.readFileSync("./templates/root.html", "utf-8");
const todosJson = JSON.parse(fs.readFileSync("./jsons/todos.json", "utf-8"));
const donesJson = JSON.parse(fs.readFileSync("./jsons/dones.json", "utf-8"));
const expiresJson = JSON.parse(fs.readFileSync("./jsons/expires.json", "utf-8"));
app.listen(port, () => {
    console.log(`server start at port ${port} on http://localhost:3000`);
});
app.get("/", (req, res) => {
    res.status(200).send(readBasePage);
});
app.get("/todos", (req, res) => {
    res.status(200).json({
        message: "success",
        results: todosJson.todos.length,
        data: todosJson,
    });
});
app.get("/dones", (req, res) => {
    res.status(200).json({
        message: "success",
        results: donesJson.dones.length,
        data: donesJson,
    });
});
app.get("/expires", (req, res) => {
    res.status(200).jsonp({
        message: "success",
        results: expiresJson.expires.length,
        data: expiresJson,
    });
});
