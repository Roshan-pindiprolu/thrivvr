const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/posts', (req, res) => {
  const filePath = path.join(__dirname, `../contentJsons/categories.json`);

  // Step 1: Check if file exists

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Navigation file read error:', err);
      return res.status(500).json({ error: 'Navigation config not found' });
    }

    try {
      const items = JSON.parse(data);
      res.json(items);
    } catch (parseErr) {
      res.status(500).json({ error: 'Failed to parse navigation data' });
    }
  });
});

module.exports = router;
