import { createStudentSubmission, deleteSubmission, getAllSubmissions, getRecentSubmissions, markAsRead } from "../Services/StudentSubmissionService.js";


export const createSubmissionController = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
      serviceInterested,
      preferredStudyDestination,
      message
    } = req.body;

    if (!firstName || !lastName || !email || !phoneNumber || !country || !serviceInterested) {
      return res.status(400).json({
        success: false,
        message: 'All required fields must be provided'
      });
    }

    const result = await createStudentSubmission({
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
      serviceInterested,
      preferredStudyDestination,
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

export const markAsReadController = async (req, res) => {
  try {
    const result = await markAsRead(req.params.id);
    return res.status(result.success ? 200 : 404).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getRecentSubmissionsController = async (req, res) => {
  try {
    const result = await getRecentSubmissions();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getAllSubmissionsController = async (req, res) => {
  try {
    const result = await getAllSubmissions();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const deleteSubmissionController = async (req, res) => {
  try {
    const result = await deleteSubmission(req.params.id);
    return res.status(result.success ? 200 : 404).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};