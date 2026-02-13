import { loginUser, registerUser } from "../Services/Adminservice.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email and password'
      });
    }

    const result = await registerUser({ name, email, password });

    return res.status(201).json(result);
  } catch (error) {
    console.error('Register Error:', error);
    return res.status(400).json({
      success: false,
      message: error.message || 'Registration failed'
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      });
    }

    const result = await loginUser({ email, password });

    return res.status(200).json(result);
  } catch (error) {
    console.error('Login Error:', error);
    return res.status(401).json({
      success: false,
      message: error.message || 'Login failed'
    });
  }
};
