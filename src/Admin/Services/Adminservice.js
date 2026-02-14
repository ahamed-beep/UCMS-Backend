import ContactMessage from "../../Contact/Model/ContactModel.js";
import Service from "../../OurService(Home)/Model/homeservices.js";
import StudentSubmission from "../../StudentApplications/Model/StudentSubmissionModel.js";
import { generateToken } from "../Config/config.js";
import User from "../Model/AdminModel.js";
import bcrypt from 'bcrypt';

export const registerUser = async (userData) => {
  try {
    const { name, email, password } = userData;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    return {
      success: true,
      message: 'User registered successfully. Please login with your credentials.',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      }
    };
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const { email, password } = credentials;

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid email or password');
    }

    const token = generateToken(user._id);

    return {
      success: true,
      message: 'Login successful',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        },
        token
      }
    };
  } catch (error) {
    throw error;
  }
};





export const getDashboardStats = async () => {
  try {
    const totalStudents = await StudentSubmission.countDocuments();

    const totalServices = await Service.countDocuments();

    const totalMessages = await ContactMessage.countDocuments();

    const unreadMessages = await ContactMessage.countDocuments({ status: 'unread' });

    return {
      success: true,
      data: {
        totalStudents,
        totalServices,
        totalMessages,
        unreadMessages
      }
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};