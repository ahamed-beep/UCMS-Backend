
export const getUserEmailTemplate = (userData) => {
  const { firstName, lastName, serviceInterested } = userData;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: #667eea;
          color: white;
          padding: 30px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }
        .content {
          background: #f9f9f9;
          padding: 30px;
          border: 1px solid #ddd;
        }
        .info-box {
          background: white;
          padding: 20px;
          margin: 20px 0;
          border-radius: 5px;
          border-left: 4px solid #667eea;
        }
        .footer {
          background: #333;
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 0 0 10px 10px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>UCMS Consultancy</h1>
      </div>
      
      <div class="content">
        <h2>Application Received Successfully!</h2>
        
        <p>Dear ${firstName} ${lastName},</p>
        
        <p>Thank you for your interest in ${serviceInterested}. We have received your application.</p>
        
        <p>Our team will contact you within 24-48 hours.</p>
        
        <div class="info-box">
          <h3>Contact Information</h3>
          <p><strong>Company Name:</strong> UCMS Consultancy</p>
          <p><strong>Email:</strong> info@ucms.com</p>
          <p><strong>Phone:</strong> +92-300-1234567</p>
          <p><strong>Website:</strong> https://www.ucms.com</p>
        </div>
      </div>
      
      <div class="footer">
        <p>UCMS Consultancy</p>
        <p>info@ucms.com | +92-300-1234567</p>
        <p>https://www.ucms.com</p>
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
    message
  } = userData;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 700px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: #dc3545;
          color: white;
          padding: 30px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }
        .content {
          background: white;
          padding: 30px;
          border: 1px solid #ddd;
        }
        .info-box {
          background: #f8f9fa;
          padding: 15px;
          margin: 10px 0;
          border-radius: 5px;
        }
        .footer {
          background: #333;
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 0 0 10px 10px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>New Student Application</h1>
        <p>ACTION REQUIRED - Response within 24-48 hours</p>
      </div>
      
      <div class="content">
        <h2>Student Information</h2>
        
        <div class="info-box">
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phoneNumber}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Service Interested:</strong> ${serviceInterested}</p>
          <p><strong>Preferred Destination:</strong> ${preferredStudyDestination || 'Not specified'}</p>
        </div>
        
        ${message ? `
        <h3>Student's Message:</h3>
        <div class="info-box">
          <p>${message}</p>
        </div>
        ` : ''}
        
        <h3>Company Information</h3>
        <div class="info-box">
          <p><strong>Company Name:</strong> UCMS Consultancy</p>
          <p><strong>Email:</strong> info@ucms.com</p>
          <p><strong>Phone:</strong> +92-300-1234567</p>
          <p><strong>Website:</strong> https://www.ucms.com</p>
        </div>
      </div>
      
      <div class="footer">
        <p>UCMS Consultancy</p>
        <p>info@ucms.com | +92-300-1234567</p>
      </div>
    </body>
    </html>
  `;
};