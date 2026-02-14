import { transporter } from "../../StudentApplications/Nodemailer/nodemailer.js";
import { getContactAdminEmailTemplate, getContactUserEmailTemplate } from "./contactEmailTemplates.js";


export const sendContactEmails = async (contactData) => {
  try {
   

    const userMailOptions = {
      from: '"UCMS Consultancy" <' + process.env.EMAIL_USER + '>',
      to: contactData.email,
      subject: `Message Received - ${contactData.subject}`,
      html: getContactUserEmailTemplate(contactData)
    };

    // Email to ADMIN
    const adminMailOptions = {
      from: '"UCMS Consultancy" <' + process.env.EMAIL_USER + '>',
      to: 'muhamedahamed251@gmail.com',  
      subject: `New Contact: ${contactData.firstName} ${contactData.lastName} - ${contactData.subject}`,
      html: getContactAdminEmailTemplate(contactData)
    };

    console.log('📤 Sending user email...');
    const userEmailResult = await transporter.sendMail(userMailOptions);
    console.log('✅ User email sent:', userEmailResult.messageId);

    console.log('📤 Sending admin email...');
    const adminEmailResult = await transporter.sendMail(adminMailOptions);
    console.log('✅ Admin email sent:', adminEmailResult.messageId);

    return {
      success: true,
      userEmailSent: true,
      adminEmailSent: true
    };
  } catch (error) {
    console.error('❌ Email sending error:', error);
    console.error('Error details:', error.message);
    return {
      success: false,
      error: error.message
    };
  }
};