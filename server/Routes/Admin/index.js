const express = require("express");
const route = express.Router();

route.post("/account/addproduct", require("./addProduct"));
route.put("/updateProduct", require("./updateproduct"));
route.delete("/deleteProduct/:deleteProductId", require("./deleteProduct"));
route.put("/banuser", require("./banUser"));

module.exports = route;
