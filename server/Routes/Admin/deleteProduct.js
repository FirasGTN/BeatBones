const Product = require("../../models/Product");

module.exports = async (req, res) => {
  try {
    let { productId } = req.query;
    const newproduct = await Product.findOneAndDelete(
      { _id: productId },
     
    );
    res.status(200).json({ status: true, message: "product has been deleted successfully" });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
