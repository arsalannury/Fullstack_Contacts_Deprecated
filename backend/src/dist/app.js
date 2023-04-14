"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const fs = require("fs");
const { v4: v4uuid } = require("uuid");
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
app.post("/todos", (req, res) => {
    const body = req.body;
    if (!body.status || !body.title || !body.created_by || !body.priority) {
        res.status(500).send("Error on the server ! check request data");
        return;
    }
    todosJson.todos.push(req.body);
    const lastIndexOfTodosJson = todosJson.todos.at(-1);
    Object.assign(lastIndexOfTodosJson, { id: v4uuid() });
    fs.writeFile("./jsons/todos.json", JSON.stringify(todosJson), () => {
        res.status(200).json({
            message: "success",
            data: req.body,
        });
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
