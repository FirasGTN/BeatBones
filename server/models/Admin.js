const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true,"this field is required"],
      minlength: 4,
      maxlength: 20,
      unique: true,
      match: /^[a-zA-Z0-9_]*$/,
      trim: true,
    },
    email: {
      type: String,
      required: [true,"this field is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/,
    },
    password: {
      type: String,
      required: [true,"this field is required"],
      minlength: 8,
    },
    isadmin: {
        type: Boolean,
        default: true,
      },
  });
  
  const Admin = mongoose.model('Admin', adminSchema);
  
  module.exports = Admin;