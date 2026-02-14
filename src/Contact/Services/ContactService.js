import ContactMessage from "../Model/ContactModel.js";

export const createContactMessage = async (messageData) => {
  try {
    const message = await ContactMessage.create(messageData);

    return {
      success: true,
      message: 'Message sent successfully',
      data: message
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

export const markMessageAsRead = async (messageId) => {
  try {
    const message = await ContactMessage.findById(messageId);

    if (!message) {
      return {
        success: false,
        message: 'Message not found'
      };
    }

    message.status = 'read';
    await message.save();

    return {
      success: true,
      message: 'Marked as read',
      data: message
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

export const getRecentMessages = async () => {
  try {
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    const messages = await ContactMessage.find({
      createdAt: { $gte: oneDayAgo }
    }).sort({ createdAt: -1 });

    return {
      success: true,
      count: messages.length,
      data: messages
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

export const getAllMessages = async () => {
  try {
    const messages = await ContactMessage.find()
      .sort({ createdAt: -1 });

    return {
      success: true,
      count: messages.length,
      data: messages
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

export const deleteMessage = async (messageId) => {
  try {
    const message = await ContactMessage.findById(messageId);

    if (!message) {
      return {
        success: false,
        message: 'Message not found'
      };
    }

    await ContactMessage.findByIdAndDelete(messageId);

    return {
      success: true,
      message: 'Message deleted successfully'
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};