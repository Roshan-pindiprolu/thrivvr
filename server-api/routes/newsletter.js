const express = require('express');
const router = express.Router();
const Newsletter = require('../models/Newslatter'); // Create this model if you haven't
const sendThankYouEmail = require('../utils/sendEmail');

router.post('/', async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.status(409).json({ error: 'Already subscribed' });
    }

    const newSub = new Newsletter({ email });
    await newSub.save();

    await sendThankYouEmail(email); // 💌 Send email

    res.status(201).json({ message: 'Subscribed and email sent' });
  } catch (err) {
    console.error("❌ Newsletter error:", err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
