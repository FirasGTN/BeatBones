const User = require("../../models/User");

module.exports = async (req, res) => {
  try {
    let id = req.params;
    const data = await User.findOne({ _id: id.id });
    let existId = await Cart.findOne({ userid: id.id });
    if (existId) {
      return res.status(201).json({
        success: true,
        message: "cart geted with successfully.",
        cart: existId,
        data,
      });
    } else {
      return res.status(201).json({
        success: true,
        message: "No cart found.",
        data,
      });
    }
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
