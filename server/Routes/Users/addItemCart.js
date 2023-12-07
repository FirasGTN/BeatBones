const Cart = require("../../models/Cart");

module.exports = async (req, res) => {
  try {
    let { userid, product } = req.body;
    let existingCart = await Cart.findOne({ userid });
    if (existingCart) {
      existingCart.product.push(product);
      await existingCart.save();
    }
    if (!existingCart) {
      const newCart = new Cart({
        userid,
        product,
      });
      await newCart.save();
    }
    return res
      .status(201)
      .json({ success: true, message: "Item added successfully." });
  } catch (error) {
    if (error) {
      return res.status(401).json({
        success: false,
        message: "failed for some reason try change the username and try again",
      });
    }
  }
};
