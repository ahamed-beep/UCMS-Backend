// Utils/emailTemplates.js - COMPLETE FILE

export const getUserEmailTemplate = (userData) => {
  const { firstName, lastName, serviceInterested } = userData;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          background-color: #f5f5f5;
          padding: 20px;
        }
        .email-wrapper {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
        }
        .header {
          background-color: #ffffff;
          padding: 40px 40px 30px;
          border-bottom: 1px solid #e0e0e0;
        }
        .logo {
          font-size: 24px;
          font-weight: 600;
          color: #1a1a1a;
          letter-spacing: -0.5px;
        }
        .content {
          padding: 40px;
          background-color: #ffffff;
        }
        .greeting {
          font-size: 16px;
          color: #1a1a1a;
          margin-bottom: 24px;
        }
        .message-text {
          font-size: 15px;
          color: #4a4a4a;
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .divider {
          height: 1px;
          background-color: #e0e0e0;
          margin: 32px 0;
        }
        .info-section {
          margin-top: 32px;
          padding: 24px;
          background-color: #f9f9f9;
          border-left: 3px solid #000000;
        }
        .info-title {
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .info-item {
          font-size: 14px;
          color: #4a4a4a;
          margin-bottom: 8px;
          display: flex;
          align-items: baseline;
        }
        .info-label {
          font-weight: 500;
          color: #1a1a1a;
          min-width: 80px;
        }
        .info-value {
          color: #4a4a4a;
        }
        .footer {
          padding: 32px 40px;
          background-color: #fafafa;
          border-top: 1px solid #e0e0e0;
          text-align: center;
        }
        .footer-text {
          font-size: 13px;
          color: #6a6a6a;
          line-height: 1.6;
          margin-bottom: 8px;
        }
        .footer-links {
          margin-top: 16px;
        }
        .footer-link {
          font-size: 13px;
          color: #4a4a4a;
          text-decoration: none;
          margin: 0 12px;
        }
        .footer-link:hover {
          color: #1a1a1a;
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <div class="header">
          <div class="logo">UCMS Consultancy</div>
        </div>
        
        <div class="content">
          <div class="greeting">Hello ${firstName} ${lastName},</div>
          
          <p class="message-text">
            Thank you for submitting your application for <strong>${serviceInterested}</strong>. We have successfully received your information.
          </p>
          
          <p class="message-text">
            Our admission counselor will review your application and contact you within 24-48 hours to discuss the next steps.
          </p>
          
          <div class="divider"></div>
          
          <div class="info-section">
            <div class="info-title">Contact Details</div>
            <div class="info-item">
              <span class="info-label">Email:</span>
              <span class="info-value">info@ucms.com</span>
            </div>
            <div class="info-item">
              <span class="info-label">Phone:</span>
              <span class="info-value">+92-300-1234567</span>
            </div>
            <div class="info-item">
              <span class="info-label">Website:</span>
              <span class="info-value">www.ucms.com</span>
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p class="footer-text">
            This is an automated message. Please do not reply to this email.
          </p>
          <p class="footer-text">
            © 2024 UCMS Consultancy. All rights reserved.
          </p>
          <div class="footer-links">
            <a href="https://www.ucms.com" class="footer-link">Website</a>
            <a href="https://www.ucms.com/privacy" class="footer-link">Privacy Policy</a>
            <a href="https://www.ucms.com/terms" class="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const getAdminEmailTemplate = (userData) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    country,
    serviceInterested,
    preferredStudyDestination,
    message,
    createdAt
  } = userData;
  
  const date = new Date(createdAt || Date.now()).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          background-color: #f5f5f5;
          padding: 20px;
        }
        .email-wrapper {
          max-width: 700px;
          margin: 0 auto;
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
        }
        .header {
          background-color: #1a1a1a;
          padding: 32px 40px;
          color: #ffffff;
        }
        .header-title {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .header-subtitle {
          font-size: 14px;
          color: #cccccc;
        }
        .alert-banner {
          background-color: #fff3cd;
          border-left: 4px solid #ffc107;
          padding: 16px 24px;
          margin: 0;
        }
        .alert-text {
          font-size: 14px;
          color: #856404;
          font-weight: 500;
        }
        .content {
          padding: 40px;
        }
        .section {
          margin-bottom: 32px;
        }
        .section-title {
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 2px solid #e0e0e0;
        }
        .data-table {
          width: 100%;
          border-collapse: collapse;
        }
        .data-row {
          border-bottom: 1px solid #f0f0f0;
        }
        .data-row:last-child {
          border-bottom: none;
        }
        .data-label {
          padding: 12px 16px 12px 0;
          font-weight: 500;
          color: #4a4a4a;
          font-size: 14px;
          width: 40%;
          vertical-align: top;
        }
        .data-value {
          padding: 12px 0;
          color: #1a1a1a;
          font-size: 14px;
        }
        .message-box {
          background-color: #f9f9f9;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          padding: 20px;
          margin-top: 16px;
        }
        .message-content {
          font-size: 14px;
          color: #1a1a1a;
          line-height: 1.7;
          white-space: pre-wrap;
        }
        .action-buttons {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }
        .btn {
          display: inline-block;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          border-radius: 4px;
          text-align: center;
        }
        .btn-primary {
          background-color: #1a1a1a;
          color: #ffffff;
        }
        .btn-secondary {
          background-color: #ffffff;
          color: #1a1a1a;
          border: 1px solid #1a1a1a;
        }
        .metadata {
          background-color: #f9f9f9;
          padding: 16px 20px;
          border-top: 1px solid #e0e0e0;
          font-size: 13px;
          color: #6a6a6a;
        }
        .footer {
          padding: 24px 40px;
          background-color: #fafafa;
          border-top: 1px solid #e0e0e0;
          text-align: center;
        }
        .footer-text {
          font-size: 13px;
          color: #6a6a6a;
          line-height: 1.6;
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <div class="header">
          <div class="header-title">New Student Application</div>
          <div class="header-subtitle">Application Submission</div>
        </div>
        
        <div class="alert-banner">
          <div class="alert-text">⚠ Response required within 24-48 hours</div>
        </div>
        
        <div class="content">
          <div class="section">
            <div class="section-title">Student Information</div>
            <table class="data-table">
              <tr class="data-row">
                <td class="data-label">Full Name</td>
                <td class="data-value">${firstName} ${lastName}</td>
              </tr>
              <tr class="data-row">
                <td class="data-label">Email Address</td>
                <td class="data-value">${email}</td>
              </tr>
              <tr class="data-row">
                <td class="data-label">Phone Number</td>
                <td class="data-value">${phoneNumber}</td>
              </tr>
              <tr class="data-row">
                <td class="data-label">Country</td>
                <td class="data-value">${country}</td>
              </tr>
              <tr class="data-row">
                <td class="data-label">Service Interested</td>
                <td class="data-value"><strong>${serviceInterested}</strong></td>
              </tr>
              <tr class="data-row">
                <td class="data-label">Study Destination</td>
                <td class="data-value">${preferredStudyDestination || 'Not specified'}</td>
              </tr>
              <tr class="data-row">
                <td class="data-label">Submission Date</td>
                <td class="data-value">${date}</td>
              </tr>
            </table>
          </div>
          
          ${message ? `
          <div class="section">
            <div class="section-title">Additional Message</div>
            <div class="message-box">
              <div class="message-content">${message}</div>
            </div>
          </div>
          ` : ''}
          
          <div class="action-buttons">
            <a href="mailto:${email}" class="btn btn-primary">Reply via Email</a>
            <a href="tel:${phoneNumber}" class="btn btn-secondary">Call Student</a>
          </div>
        </div>
        
        <div class="metadata">
          UCMS Consultancy • info@ucms.com • +92-300-1234567 • www.ucms.com
        </div>
        
        <div class="footer">
          <p class="footer-text">
            This is an automated notification from your application management system.
          </p>
          <p class="footer-text">
            © 2024 UCMS Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const getContactUserEmailTemplate = (userData) => {
  const { firstName, lastName, subject } = userData;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          background-color: #f5f5f5;
          padding: 20px;
        }
        .email-wrapper {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
        }
        .header {
          background-color: #ffffff;
          padding: 40px 40px 30px;
          border-bottom: 1px solid #e0e0e0;
        }
        .logo {
          font-size: 24px;
          font-weight: 600;
          color: #1a1a1a;
          letter-spacing: -0.5px;
        }
        .content {
          padding: 40px;
          background-color: #ffffff;
        }
        .greeting {
          font-size: 16px;
          color: #1a1a1a;
          margin-bottom: 24px;
        }
        .message-text {
          font-size: 15px;
          color: #4a4a4a;
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .divider {
          height: 1px;
          background-color: #e0e0e0;
          margin: 32px 0;
        }
        .info-section {
          margin-top: 32px;
          padding: 24px;
          background-color: #f9f9f9;
          border-left: 3px solid #000000;
        }
        .info-title {
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .info-item {
          font-size: 14px;
          color: #4a4a4a;
          margin-bottom: 8px;
          display: flex;
          align-items: baseline;
        }
        .info-label {
          font-weight: 500;
          color: #1a1a1a;
          min-width: 80px;
        }
        .info-value {
          color: #4a4a4a;
        }
        .footer {
          padding: 32px 40px;
          background-color: #fafafa;
          border-top: 1px solid #e0e0e0;
          text-align: center;
        }
        .footer-text {
          font-size: 13px;
          color: #6a6a6a;
          line-height: 1.6;
          margin-bottom: 8px;
        }
        .footer-links {
          margin-top: 16px;
        }
        .footer-link {
          font-size: 13px;
          color: #4a4a4a;
          text-decoration: none;
          margin: 0 12px;
        }
        .footer-link:hover {
          color: #1a1a1a;
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <div class="header">
          <div class="logo">UCMS Consultancy</div>
        </div>
        
        <div class="content">
          <div class="greeting">Hello ${firstName} ${lastName},</div>
          
          <p class="message-text">
            Thank you for reaching out to us. We have received your inquiry regarding <strong>${subject}</strong>.
          </p>
          
          <p class="message-text">
            Our team is reviewing your message and will respond within 24-48 hours. We appreciate your patience.
          </p>
          
          <div class="divider"></div>
          
          <div class="info-section">
            <div class="info-title">Contact Details</div>
            <div class="info-item">
              <span class="info-label">Email:</span>
              <span class="info-value">info@ucms.com</span>
            </div>
            <div class="info-item">
              <span class="info-label">Phone:</span>
              <span class="info-value">+92-300-1234567</span>
            </div>
            <div class="info-item">
              <span class="info-label">Website:</span>
              <span class="info-value">www.ucms.com</span>
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p class="footer-text">
            This is an automated message. Please do not reply to this email.
          </p>
          <p class="footer-text">
            © 2024 UCMS Consultancy. All rights reserved.
          </p>
          <div class="footer-links">
            <a href="https://www.ucms.com" class="footer-link">Website</a>
            <a href="https://www.ucms.com/privacy" class="footer-link">Privacy Policy</a>
            <a href="https://www.ucms.com/terms" class="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const getContactAdminEmailTemplate = (userData) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    subject,
    message,
    createdAt
  } = userData;
  
  const date = new Date(createdAt || Date.now()).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          background-color: #f5f5f5;
          padding: 20px;
        }
        .email-wrapper {
          max-width: 700px;
          margin: 0 auto;
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
        }
        .header {
          background-color: #1a1a1a;
          padding: 32px 40px;
          color: #ffffff;
        }
        .header-title {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .header-subtitle {
          font-size: 14px;
          color: #cccccc;
        }
        .alert-banner {
          background-color: #fff3cd;
          border-left: 4px solid #ffc107;
          padding: 16px 24px;
          margin: 0;
        }
        .alert-text {
          font-size: 14px;
          color: #856404;
          font-weight: 500;
        }
        .content {
          padding: 40px;
        }
        .section {
          margin-bottom: 32px;
        }
        .section-title {
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 2px solid #e0e0e0;
        }
        .data-table {
          width: 100%;
          border-collapse: collapse;
        }
        .data-row {
          border-bottom: 1px solid #f0f0f0;
        }
        .data-row:last-child {
          border-bottom: none;
        }
        .data-label {
          padding: 12px 16px 12px 0;
          font-weight: 500;
          color: #4a4a4a;
          font-size: 14px;
          width: 35%;
          vertical-align: top;
        }
        .data-value {
          padding: 12px 0;
          color: #1a1a1a;
          font-size: 14px;
        }
        .message-box {
          background-color: #f9f9f9;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          padding: 20px;
          margin-top: 16px;
        }
        .message-content {
          font-size: 14px;
          color: #1a1a1a;
          line-height: 1.7;
          white-space: pre-wrap;
        }
        .action-buttons {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }
        .btn {
          display: inline-block;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          border-radius: 4px;
          text-align: center;
        }
        .btn-primary {
          background-color: #1a1a1a;
          color: #ffffff;
        }
        .btn-secondary {
          background-color: #ffffff;
          color: #1a1a1a;
          border: 1px solid #1a1a1a;
        }
        .metadata {
          background-color: #f9f9f9;
          padding: 16px 20px;
          border-top: 1px solid #e0e0e0;
          font-size: 13px;
          color: #6a6a6a;
        }
        .footer {
          padding: 24px 40px;
          background-color: #fafafa;
          border-top: 1px solid #e0e0e0;
          text-align: center;
        }
        .footer-text {
          font-size: 13px;
          color: #6a6a6a;
          line-height: 1.6;
        }
      </style>
    </head>
    <body>
      <div class="email-wrapper">
        <div class="header">
          <div class="header-title">New Contact Message</div>
          <div class="header-subtitle">Contact Form Submission</div>
        </div>
        
        <div class="alert-banner">
          <div class="alert-text">⚠ Response required within 24-48 hours</div>
        </div>
        
        <div class="content">
          <div class="section">
            <div class="section-title">Sender Information</div>
            <table class="data-table">
              <tr class="data-row">
                <td class="data-label">Full Name</td>
                <td class="data-value">${firstName} ${lastName}</td>
              </tr>
              <tr class="data-row">
                <td class="data-label">Email Address</td>
                <td class="data-value">${email}</td>
              </tr>
              <tr class="data-row">
                <td class="data-label">Phone Number</td>
                <td class="data-value">${phoneNumber}</td>
              </tr>
              <tr class="data-row">
                <td class="data-label">Subject</td>
                <td class="data-value"><strong>${subject}</strong></td>
              </tr>
              <tr class="data-row">
                <td class="data-label">Date & Time</td>
                <td class="data-value">${date}</td>
              </tr>
            </table>
          </div>
          
          <div class="section">
            <div class="section-title">Message Content</div>
            <div class="message-box">
              <div class="message-content">${message}</div>
            </div>
          </div>
          
          <div class="action-buttons">
            <a href="mailto:${email}" class="btn btn-primary">Reply via Email</a>
            <a href="tel:${phoneNumber}" class="btn btn-secondary">Call Customer</a>
          </div>
        </div>
        
        <div class="metadata">
          UCMS Consultancy • info@ucms.com • +92-300-1234567 • www.ucms.com
        </div>
        
        <div class="footer">
          <p class="footer-text">
            This is an automated notification from your contact management system.
          </p>
          <p class="footer-text">
            © 2024 UCMS Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};