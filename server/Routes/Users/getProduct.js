const Product = require("../../models/Product");

module.exports = async (req, res) => {
  try {
    let product = await Product.find();
    return res.status(201).json({
      success: true,
      message: "Product geted with successfully.",
      product : product
    });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
