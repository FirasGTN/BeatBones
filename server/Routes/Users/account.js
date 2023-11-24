const User = require("../../models/User");

module.exports = async (req, res) => {
  try {
    let users = await User.find();
    return res.status(201).json({
      success: true,
      message: "users geted with successfully.",
      users: users,
    });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
