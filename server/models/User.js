const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "the field of username is required"],
    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,20}$/,
      "Invalid username. Usernames can only contain letters, numbers, and underscores.",
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
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+{}\[\]:;<>,.?/~\\]).{8,}$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.",
    ],
  },
  isuser: {
    type: Boolean,
    default: true,
  },
});

module.exports = User = mongoose.model("User", userSchema);
