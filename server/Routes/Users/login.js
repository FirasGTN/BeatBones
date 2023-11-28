const User = require("../../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config;

module.exports = async (req, res) => {
  let { email, password } = req.body;
  let key = process.env.KEY;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        status: false,
        message: " wrong email or password, please check again",
      });
    }
    if (user.password !== password) {
      return res.status(401).json({
        status: false,
        message: " wrong email or password, please check again",
      });
    }
    let token = await jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      key
    );
    return res.status(200).json({
      status: true,
      data: {
        userId: user._id,
        role: user.role,
        token,
      },
      message: "sign in with successfully",
    });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
