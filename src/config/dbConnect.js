import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.mongo_url);
    console.log("MongoDB connection successful");
  } catch (error) {
    console.log("Mongo DB Connection failed");
    console.log(error);
  }
};

