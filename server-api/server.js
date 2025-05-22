const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Routes
const authRoutes = require('./routes/auth');
const navRoutes = require('./routes/nav');
const metaRoutes = require('./routes/meta')
const newsletterRoutes = require('./routes/newsletter');


const app = express();

// ✅ CORS FIX - this must come before all routes and body parsing
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// app use place 
app.use(express.json());  // Keep this AFTER CORS
app.use('/api/auth', authRoutes);
app.use('/api/nav', navRoutes);
app.use('/api/meta', metaRoutes)
app.use('/api/newsletter', newsletterRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB ✅'))
  .catch(err => console.error('MongoDB error ❌', err));

const PORT = 1000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
