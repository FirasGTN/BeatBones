const User = require("../../models/User");

module.exports = async (req, res) => {
  try {
    const { mail, oldPassword, newPassword } = req.body;
    const { id } = req.params
    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.password !== oldPassword) {
      return res.status(401).json({ error: "Invalid old password" });
    }

    user.password = newPassword;
    await user.save();

    res.json({ message: "Password changed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
