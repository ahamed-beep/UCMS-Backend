import StudentSubmission from "../Model/StudentSubmissionModel.js";
import { sendApplicationEmails } from "../Utils/sendEmail.js";

export const createStudentSubmission = async (submissionData) => {
  try {
    const submission = await StudentSubmission.create(submissionData);

    sendApplicationEmails(submission.toObject())
      .then(result => {
        if (result.success) {
          console.log('✅ Emails sent successfully');
        } else {
          console.error('⚠️ Email sending failed:', result.error);
        }
      })
      .catch(err => {
        console.error('❌ Email error:', err);
      });

    return {
      success: true,
      message: 'Application submitted successfully. You will receive a confirmation email shortly.',
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