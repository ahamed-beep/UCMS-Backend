import { transporter } from '../Nodemailer/nodemailer.js';
import { getAdminEmailTemplate, getUserEmailTemplate } from './emailTemplates.js';

export const sendApplicationEmails = async (submissionData) => {
  try {
    // Email to USER
    const userMailOptions = {
      from: '"UCMS Consultancy" <' + process.env.EMAIL_USER + '>',
      to: submissionData.email,
      subject: `Application Received - ${submissionData.serviceInterested}`,
      html: getUserEmailTemplate(submissionData)
    };

    // Email to ADMIN
    const adminMailOptions = {
      from: '"UCMS Consultancy" <' + process.env.EMAIL_USER + '>',
      to: 'muhamedahamed251@gmail.com',
      subject: `New Application: ${submissionData.firstName} ${submissionData.lastName}`,
      html: getAdminEmailTemplate(submissionData)
    };

    // Send both emails
    const [userEmailResult, adminEmailResult] = await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions)
    ]);

    console.log('✅ User email sent:', userEmailResult.messageId);
    console.log('✅ Admin email sent:', adminEmailResult.messageId);

    return {
      success: true,
      userEmailSent: true,
      adminEmailSent: true
    };
  } catch (error) {
    console.error('❌ Email sending error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};