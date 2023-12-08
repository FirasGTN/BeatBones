const express = require("express");
const route = express.Router();
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

route.post("/store/paiment", cors(), require("./Payment"));
route.post("/register", require("./register"));
route.post("/additemcart", require("./addItemCart"));
route.post("/login", require("./login"));
route.get("/store", require("./getProduct"));
route.get("/store/:id", require("./getOneProduct"));
route.put("/admin/", require("./UpdatePassword"));
route.get("/account/:id", require("./getAccount"));
route.put("/deletitemcart", require("./DeleteItemCart"));

module.exports = route;
