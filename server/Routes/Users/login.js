const User = require("../../models/User");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        status: false,
        message: " wrong email or password, please check again",
      });
    }
    let checkpassword = await bcrypt.compare(password, user.password);
    console.log(user.password);
    if (!checkpassword) {
      return res.status(401).json({
        status: false,
        message: " wrong email or password, please check again",
      });
    }
    return res.status(200).json({
      status: true,
      message: "Connected with succesfuly",
    });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};
