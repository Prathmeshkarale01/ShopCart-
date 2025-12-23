import mongoose from "mongoose";

async function databaseConnection() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err.message);
    throw err; // ❗ DO NOT process.exit() here
  }
}

export { databaseConnection };
