const { Teacher, Student } = require("../models/userModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Utility function to send response with token
const sendResponseWithToken = (res, token, user , message) => {
  return res
    .cookie("token", token, {
      httpOnly: process.env.NODE_ENV === "production",
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    })
    .status(201)
    .json({
      success: true,
      message: `User ${message} successfully`,
      user: {
        name: user.name,
        number: user.phone,
        email: user.email,
        photoURL: user.photoURL,
      },
    });
};

const createUser = async (req, res) => {
  try {
    const {
      role,
      name,
      password,
      phone,
      email,
      gender,
      tuitionDistrict,
      location,
      tuitionArea,
    } = req.body;

    // Validate required fields
    if (!role || !name || !password || !phone) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Validate role
    if (!["student", "teacher"].includes(role)) {
      return res.status(400).json({ success: false, message: "Invalid role" });
    }

    // Validate phone number length
    if (phone.length < 10) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid phone number" });
    }

    // Check if user already exists
    const existingUser = await (role === "teacher" ? Teacher : Student).findOne(
      { phone }
    );
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate token
    const token = jwt.sign({ phone }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    console.log(token);
    // Create user based on role
    const userData = {
      name,
      password: hashedPassword,
      phone,
      role,
      ...(role === "teacher" && {
        email,
        gender,
        tuitionDistrict,
        location,
        tuitionArea,
      }),
    };

    const user =
      role === "teacher"
        ? await Teacher.create(userData)
        : await Student.create(userData);

    return sendResponseWithToken(res, token, user , "register");
  } catch (error) {
    console.error("Error creating user:", error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { phoneEmail, password, role } = req.body;

    // Validate required fields
    if (!phoneEmail || !password || !role) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // user model based on role
    const UserModel =
      role === "teacher" ? Teacher : role === "student" ? Student : null;
    if (!UserModel) {
      return res.status(400).json({ success: false, message: "Invalid role" });
    }

    // input is email or phone
    const isEmail = phoneEmail.includes("@");
    const query = isEmail ? { email: phoneEmail } : { phone: phoneEmail };

    // Find user by email or phone
    const user = await UserModel.findOne(query);
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { phone: user.phone, email: user.email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );

    return sendResponseWithToken(res, token, user , "login");
  } catch (error) {
    console.error("Error logging in user:", error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

module.exports = { createUser, loginUser };
