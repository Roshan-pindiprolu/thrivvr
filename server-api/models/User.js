const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  googleId: { type: String }, // ✅ Add this
  password: { type: String }, // can be empty for social users
  role: { type: String, enum: ['Learner', 'Teacher', 'Admin'], default: 'Learner' },
  acceptTerms: { type: Boolean, default: true }
}, { timestamps: true });


module.exports = mongoose.model('User', userSchema);