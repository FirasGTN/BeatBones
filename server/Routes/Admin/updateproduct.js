const Product = require("../../models/Product");

module.exports = async (req, res) => {
    try {
    let { productId } = req.query;
const newProduct= await Product.findOneAndUpdate({ _id: productId},
     {
      $set: { ...req.body}, 
      },
      { new: true }
      );
      res.status(200).json({status: true, data: newProduct });
    } catch (error) {
     if (error) throw error;
     res.status(401).json({status: false, error })
    }
};