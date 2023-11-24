const express = require("express");
const route = express.Router();

route.post("/account/addproduct", require("./addProduct"));

module.exports = route;
