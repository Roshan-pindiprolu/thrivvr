const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  const navFilePath = path.join(__dirname, '../data/navigation.json');

  fs.readFile(navFilePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Navigation file read error:', err);
      return res.status(500).json({ error: 'Navigation config not found' });
    }

    try {
      const navItems = JSON.parse(data);
      res.json(navItems);
    } catch (parseErr) {
      res.status(500).json({ error: 'Failed to parse navigation data' });
    }
  });
});

module.exports = router;
