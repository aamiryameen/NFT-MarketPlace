
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
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const hashConfirmPassword = await bcrypt.hash(confirmPassword, 10);

    const result = await userModal.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashPassword,
      confirmPassword: hashConfirmPassword,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    res.status(201).json({ user: result, token: token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await userModal.findOne({ email: email });
    if (!existingUser) {
      res.status(404).json({ message: "User not found" });
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      SECRET_KEY
    );

    res.status(201).json({ user: existingUser, token: token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export  { signUp, signIn };
