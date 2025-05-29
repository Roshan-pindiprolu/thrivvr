const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/send', async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.MAIL_USER,
    subject: `New Contact Message from ${firstName} ${lastName}`,
    html: `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error('Email sending failed:', err);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

module.exports = router;
