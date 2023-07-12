
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModal = require("../model/user");

const SECRET_KEY = "AUTH_API";

const signUp = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  try {
    const existingUser = await userModal.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
        status: 400
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const hashConfirmPassword = await bcrypt.hash(confirmPassword, 10);

    const result = await userModal.insertMany({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });

    const token = await jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    res.status(201).json({ success: true, message: 'User signUp successfully', token: token, status: 201 });
  } catch (error) {
    console.log('error: ', error)
    res.status(500).json({success: false, message: "Something went wrong", status: 500 });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await userModal.findOne({ email: email });
    if (!existingUser) {
      res.status(404).json({ message: "User not found" });
    }

    // const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (password != existingUser.password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      SECRET_KEY
    );

    res.status(200).json({ user: existingUser, token: token, success: true, status: 200 });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports =  { signUp, signIn };
