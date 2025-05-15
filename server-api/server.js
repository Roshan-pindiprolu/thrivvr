const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');

const app = express();

// ✅ Allow only Vite frontend to talk to backend
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB ✅'))
  .catch(err => console.error('MongoDB error ❌', err));

const PORT = 1000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
