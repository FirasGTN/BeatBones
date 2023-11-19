const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true,"the field of username is required"],
      minlength: 4,
      maxlength: 20,
      unique: true,
      match: /^[a-zA-Z0-9_]*$/,
      trim: true,
    },
    email: {
      type: String,
      required: [true,"the field of email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/,
    },
    password: {
      type: String,
      required: [true,"the field of password is required"],
      minlength: 8,
      match: /^[a-zA-Z0-9_]*$/,
    },
    isuser: {
      type: Boolean,
      default: false,
    },
  });
  
module.exports = User = mongoose.model('User', userSchema);
