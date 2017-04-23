const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true, unique: true },
  description: { type: String, trim: true },
  year: { type: String, trim: true },
  image: { type: String, trim: true },
  genre: { type: String, trim: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);
