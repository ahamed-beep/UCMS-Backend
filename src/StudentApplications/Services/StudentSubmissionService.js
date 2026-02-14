import StudentSubmission from "../Model/StudentSubmissionModel.js";

export const createStudentSubmission = async (submissionData) => {
  try {
    const submission = await StudentSubmission.create(submissionData);

    return {
      success: true,
      message: 'Application submitted successfully',
      data: submission
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

export const markAsRead = async (submissionId) => {
  try {
    const submission = await StudentSubmission.findById(submissionId);

    if (!submission) {
      return {
        success: false,
        message: 'Submission not found'
      };
    }

    submission.status = 'read';
    await submission.save();

    return {
      success: true,
      message: 'Marked as read',
      data: submission
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

export const getRecentSubmissions = async () => {
  try {
    // Get submissions from last 24 hours
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    const submissions = await StudentSubmission.find({
      createdAt: { $gte: oneDayAgo }
    }).sort({ createdAt: -1 });

    return {
      success: true,
      count: submissions.length,
      data: submissions
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

export const getAllSubmissions = async () => {
  try {
    const submissions = await StudentSubmission.find()
      .sort({ createdAt: -1 });

    return {
      success: true,
      count: submissions.length,
      data: submissions
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

export const deleteSubmission = async (submissionId) => {
  try {
    const submission = await StudentSubmission.findById(submissionId);

    if (!submission) {
      return {
        success: false,
        message: 'Submission not found'
      };
    }

    await StudentSubmission.findByIdAndDelete(submissionId);

    return {
      success: true,
      message: 'Submission deleted successfully'
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};