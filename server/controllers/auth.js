const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user_model'); // Sequelize model


const CLIENT_SECRET_KEY = process.env.CLIENT_SECRET_KEY;

// Register
const registerUser = async (req, res) => {
  const { userName, email, password, city } = req.body;

  try {
    const checkUser = await User.findOne({ where: { email } });
    if (checkUser)
      return res.json({
        success: false,
        message: 'User Already exists with the same email! Please try again',
      });
    const hashPassword = await bcrypt.hash(password, 12);
  
    const newUser = await User.create({
      userName,
      email,
      password: hashPassword,
      city,
    });

    res.status(200).json({
      success: true,
      message: 'Registration Successful',
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: 'Some error occurred',
    });
  }
};

// Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await User.findOne({ where: { email } });
    if (!checkUser)
      return res.json({
        success: false,
        message: "User doesn't exist! Please register first",
      });

    const checkPasswordMatch = await bcrypt.compare(password, checkUser.password);
    
    if (!checkPasswordMatch)
      return res.json({
        success: false,
        message: 'Incorrect password! Please try again',
      });

    const token = jwt.sign(
      {
        id: checkUser.id,
        role: checkUser.role,
        email: checkUser.email,
        userName: checkUser.userName,
      },
      CLIENT_SECRET_KEY,
      { expiresIn: '30d' }
    );

    res.cookie('token', token, { httpOnly: true, secure: false }).json({
      success: true,
      token: token,
      message: 'Logged in successfully',
      user: {
        email: checkUser.email,
        role: checkUser.role,
        id: checkUser.id,
        userName: checkUser.userName,
        city: checkUser.city,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: 'Some error occurred',
    });
  }
};

// Logout
const logoutUser = (req, res) => {
  res.clearCookie('token').json({
    success: true,
    message: 'Logged out successfully!',
  });
};

// Auth Middleware
const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({
      success: false,
      message: 'Unauthorised user!',
    });

  try {
    const decoded = jwt.verify(token, CLIENT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Unauthorised user!',
    });
  }
};

module.exports = { registerUser, loginUser, logoutUser, authMiddleware };
