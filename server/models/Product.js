const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  // id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  bgimage: { type: String, required: true },
  image: { type: String, required: true },
  colorCount: { type: Number, required: true },
  color: [{ type: String, required: true }],
  colorOne: { type: String, required: true },
  colorTwo: { type: String, required: true },
  colorThree: { type: String, required: true },
});

module.exports = Product = mongoose.model("Product", productSchema);
