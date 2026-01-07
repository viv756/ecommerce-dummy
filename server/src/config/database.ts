import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("Connected to Mongo database");
  } catch (error) {
    console.error(error);
    console.log("Error connecting to Mongo database");
    process.exit(1);
  }
};

export default connectDatabase;
