const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
import { Request, Response } from "express";

const app = express();
app.use(express.json());

const users = JSON.parse(fs.readFileSync("./json/users.json", "utf-8"));

const PostRequestHandler = (
  res: Response,
  req: Request
): Response<any, Record<string, any>> | undefined => {
  const body = req.body;
  if (!body || !body.name || !body.username || !body.email) {
    return res.status(500).end("Internal Server Error");
  }
};

//? start server
app.listen("8000", () => {
  console.log("server start at port 8000");
});

//? GET api routes start
app.get("/", (req: Request, res: Response) => {
  res.status(200).end("main route is available");
});

app.get("/users", (req: Request, res: Response) => {
  res.status(200).json({
    message: "success",
    results: users.length,
    data: users,
  });
});

//? GET api routes end

//? POST api routes start
app.post("/users", (req: Request, res: Response) => {
  PostRequestHandler(res, req);

  const dataUpdated = {
    id: uuidv4(),
    ...req.body,
  };
  users.push(dataUpdated);

  fs.writeFile("./json/users.json", JSON.stringify(users), (data: any) => {
    res.status(200).json({
      message: "success",
      data: dataUpdated,
    });
  });
});

//? POST api routes end

//? UPDATE api routes start
app.patch("/users/:id", (req: Request, res: Response) => {
  PostRequestHandler(res, req);
  res.send("success patch request!");
});
//? UPDATE api routes end

//? DELETE api routes start
app.delete("/users/:id", (req: Request, res: Response) => {
  PostRequestHandler(res, req);
  res.end("success delete request!");
});
//? DELETE api routes end
