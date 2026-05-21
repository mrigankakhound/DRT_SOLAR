const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error('❌ MONGODB_URI is not defined in .env');
    return;
  }

  // Sanitize: strip any BOM or hidden characters
  const cleanUri = uri.replace(/^\uFEFF/, '').trim();

  const attempt = async () => {
    try {
      const conn = await mongoose.connect(cleanUri, {
        serverSelectionTimeoutMS: 10000,
      });
      console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`❌ MongoDB Connection Error: ${error.message}`);
      console.log('🔄 Retrying MongoDB connection in 5 seconds...');
      setTimeout(attempt, 5000);
    }
  };

  await attempt();
};

module.exports = connectDB;

