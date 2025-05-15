const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

router.post('/signup', async (req, res) => {
  const {
    fullName,
    email,
    password,
    confirmPassword,
    phone,
    role,
    acceptTerms
  } = req.body;

  // Validate required fields
  if (!fullName || !email || !password || !confirmPassword || !acceptTerms) {
    return res.status(400).json({ error: 'Please fill all required fields.' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match.' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: 'User already exists.' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      fullName,
      email,
      password: hashedPassword,
      phone,
      role: role,
      acceptTerms
    });

    await user.save();
    res.status(201).json({ message: 'Signup successful ✅' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

router.post('/social-login', async (req, res) => {
  const { email, fullName, googleId } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ fullName, email, googleId, role: 'learner' });
      await user.save();
    }

    res.status(200).json({ message: 'User logged in via Google', user });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;
