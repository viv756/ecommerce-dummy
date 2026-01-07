import mongoose from "mongoose";
import dotenv from "dotenv";
import ProductModel from "./src/models/product.schema";
import products from "./src/data/product.data"

dotenv.config();

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI as string);
};

const importData = async () => {
  try {
    await connectDB();

    await ProductModel.deleteMany();
    await ProductModel.insertMany(products);

    console.log("✅ Products seeded successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed", error);
    process.exit(1);
  }
};

importData();
