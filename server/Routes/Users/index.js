const express = require("express");
const route = express.Router();

route.post("/register", require("./register"));
route.post("/login", require("./login"));
route.get("/store", require("./getProduct"));
route.get("/account", require("./account"));


module.exports = route;
