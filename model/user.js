const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: [String, Number],
    required: true,
  },
  confirm_password: {
    type: [String, Number],
    required: true,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
