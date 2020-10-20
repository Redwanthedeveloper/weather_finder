// Built in node module
const path = require("path");
// 3rd party node module
const express = require("express");
// custom module or imported file
const router = require("./router");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "hbs");
app.use("/", router);

app.listen(3000);
