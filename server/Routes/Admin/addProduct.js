const Product = require("../../models/Product");

module.exports = async (req, res) => {
    try {
          let {
            name,
            price,
            type,
            bgimage,
            image,
            colorCount,
            color,
            colorOne,
            colorTwo,
            colorThree,
          } = req.body;
          const newProd = new Product({
            name,
            price,
            type,
            bgimage,
            image,
            colorCount,
            color,
            colorOne,
            colorTwo,
            colorThree,
          });
          await newProd.save();
          return res
            .status(201)
            .json({
              success: true,
              message: "Product added with successfully.",
            });
    } catch (error) {
        throw error
    }
};
