const express = require("express");
const route = express.Router();

route.post("/account/addproduct", require("./addProduct"));
route.put("/updateProduct", require("./updateProduct"));
route.delete("/deleteProduct", require("./deleteProduct"));
route.get("/users", require("./getUsers"));
route.put("/banuser", require("./banUser"));

module.exports = route;
