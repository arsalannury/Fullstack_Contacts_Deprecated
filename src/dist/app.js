"use strict";
const express = require("express");
const Router = require('./URL');
// "start": "nodemon ./app.ts --w",
const app = express();
const port = 8000;
app.use(express.json());
app.listen(port, () => {
    console.log(`server running at port ${port}`);
    console.log(Router.Routes.BASE_ROUTE);
});
