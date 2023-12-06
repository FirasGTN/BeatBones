const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "the field of username is required"],
    match: [
      /^(?=.*[a-z])(?=.*[A-Z]).{5,20}$/,
      "Invalid username. Usernames can only contain one lowercase letter, one uppercase letter and numbers.",
    ],
  },
  email: {
    type: String,
    required: [true, "the field of email is required"],
    match: [
      /^\S+@\S+\.\S+$/,
      "Invalid email format. Please enter a valid email address.",
    ],
  },
  password: {
    type: String,
    required: [true, "the field of password is required"],
    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long.",
    ],
  },
  role: {
    type: String,
    default: "user",
  },
  isBanned: {
    type: Boolean,
    default: false,
  },
});

module.exports = User = mongoose.model("User", userSchema);
