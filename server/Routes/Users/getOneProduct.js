const Product = require("../../models/Product");

module.exports = async (req, res) => {
  try {
    let OneProduct = req.params;
    let product = await Product.findOne({ name: OneProduct.id });
    return res.status(201).json({
      success: true,
      message: "Product geted with successfully.",
      product: product,
    });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
