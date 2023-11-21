const User = require("../../models/User");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(401)
        .json({ success: false, message: "Email already exists." });
    }

    // Hash the password
    // if (password != undefined) {
    //   const salt = await bcrypt.genSalt(10);
    //   const password = await bcrypt.hash(password, salt);
    // }
    const newUser = new User({
      username,
      email,
      password,
    });
    await newUser.save();
    return res
      .status(201)
      .json({ success: true, message: "Account registered successfully." });
  } catch (error) {
    if (error.code) {
      return res
        .status(401)
        .json({
          success: false,
          message:
            "failed for some reason try change the username and try again",
        });
    } else if (error.errors.email) {
      return res
        .status(401)
        .json({ success: false, message: error.errors.email.message });
    } else if (error.errors.username) {
      return res
        .status(401)
        .json({ success: false, message: error.errors.username.message });
    } else if (error.errors.password) {
      return res
        .status(401)
        .json({ success: false, message: error.errors.password.message });
    }
  }
};
