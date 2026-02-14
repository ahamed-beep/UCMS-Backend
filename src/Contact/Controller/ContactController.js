import {
  createContactMessage,
  markMessageAsRead,
  getRecentMessages,
  getAllMessages,
  deleteMessage
} from "../Services/ContactService.js";

export const createContactMessageController = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      subject,
      message
    } = req.body;

    if (!firstName || !lastName || !email || !phoneNumber || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    const result = await createContactMessage({
      firstName,
      lastName,
      email,
      phoneNumber,
      subject,
      message
    });

    return res.status(result.success ? 201 : 400).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const markContactMessageAsReadController = async (req, res) => {
  try {
    const result = await markMessageAsRead(req.params.id);
    return res.status(result.success ? 200 : 404).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getRecentContactMessagesController = async (req, res) => {
  try {
    const result = await getRecentMessages();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getAllContactMessagesController = async (req, res) => {
  try {
    const result = await getAllMessages();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const deleteContactMessageController = async (req, res) => {
  try {
    const result = await deleteMessage(req.params.id);
    return res.status(result.success ? 200 : 404).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};