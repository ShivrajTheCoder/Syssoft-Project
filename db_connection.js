const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const DB_URL = process.env.DB_URL || 'mongodb://127.0.0.1:27017/authService';

const connectToDatabase = async () => {
  await mongoose.connect(DB_URL);
};

module.exports = { connectToDatabase };
