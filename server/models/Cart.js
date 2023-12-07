const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userid: { type: String, required: true },
  product: { type: Array, required: true },
});

module.exports = Cart = mongoose.model("Cart", cartSchema);
