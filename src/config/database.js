const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://kazmyriad:12345@bonusroll.daf5oxj.mongodb.net/?appName=BonusRoll");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // stop the app — no point running without a DB
  }
};

module.exports = connectDB;