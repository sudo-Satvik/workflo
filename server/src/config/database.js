import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("MongoDB is connected!");
  } catch (e) {
    console.log(`Error connecting DB`);
    process.exit(1);
  }
};
