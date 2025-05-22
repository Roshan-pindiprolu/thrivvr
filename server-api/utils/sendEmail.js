const nodemailer = require('nodemailer');

const sendThankYouEmail = async (toEmail) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    const mailOptions = {
      from: `"Thrivvr" <${process.env.MAIL_USER}>`,
      to: toEmail,
      subject: 'Thanks for Subscribing to Thrivvr!',
      html: `
        <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #333; padding: 20px; line-height: 1.6;">
        <h1 style="color: #0A0F1C;">Welcome to <span style="color: #007BFF;">Thrivvr</span>!</h1>
        
        <p style="font-size: 16px;">
            Hey there!
        </p>
        
        <p style="font-size: 16px;">
            Thank you for subscribing to <strong>Thrivvr</strong>. We're excited to have you with us.
        </p>
        
        <p style="font-size: 16px;">
            You'll now receive updates on our latest tools, tutorials, and digital products — all designed to help you grow, build, and thrive in the tech world.
        </p>
        
        <p style="font-size: 16px;">
            If you're passionate about code, learning, and creating meaningful projects — you're in the right place.
        </p>
        
        <p style="font-size: 16px; margin-top: 30px;">
            Let’s build something incredible together 🚀
        </p>
        
        <p style="font-size: 16px; margin-top: 20px;">
            — The Thrivvr Team 💻🔥
        </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Thank-you email sent to ${toEmail}`);
  } catch (error) {
    console.error("❌ Email sending failed:", error);
  }
};

module.exports = sendThankYouEmail;
