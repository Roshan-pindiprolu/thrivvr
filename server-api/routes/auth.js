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

router.post('/social-gmail-login', async (req, res) => {

  const { fullName, email, googleId, role } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        fullName,
        email,
        googleId,
        role: role || "Learner",
        password: googleId,
        acceptTerms: true
      });

      await user.save();
    }

    res.status(200).json({ message: 'Social login successful ✅', user });
  } catch (err) {
    console.error('❌ Backend Crash:', err); // <- See what the real error is
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/social-github-login', async (req, res) => {

  const { fullName, email, githubId, role } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        fullName,
        email,
        githubId,
        role: role || "learner", // match your schema enum
        password: githubId,      // or leave empty if you want
        acceptTerms: true
      });

      await user.save();
    }

    res.status(200).json({ message: 'GitHub login successful ✅', user });
  } catch (err) {
    console.error('❌ GitHub login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  const { fullName, password } = req.body;

  try {
    const user = await User.findOne({ fullName });

    if (!user) {
      return res.status(400).json({ error: 'User not found 😢' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid password ❌' });
    }

    res.status(200).json({ message: 'Login successful ✅', user });
  } catch (err) {
    console.error('❌ Login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Check for Google login
router.post('/check-google-user', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const user = await User.findOne({ email, googleId: { $exists: true } });

    if (!user) {
      return res.status(404).json({ error: 'Google user not found' });
    }

    res.json({ message: 'Google user exists' });
  } catch (error) {
    res.status(500).json({ error: 'Server error while checking Google user' });
  }
});

// Check for GitHub login
router.post('/check-github-user', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const user = await User.findOne({ email, githubId: { $exists: true } });

    if (!user) {
      return res.status(404).json({ error: 'GitHub user not found' });
    }

    res.json({ message: 'GitHub user exists' });
  } catch (error) {
    res.status(500).json({ error: 'Server error while checking GitHub user' });
  }
});

module.exports = router;
