import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.mjs";

if (!DB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Connected to database in ${NODE_ENV} mode`);
  } catch (error) {
    console.log("Error connecting to the DB", error);
    process.exit(1);
  }
};

export default connectDB;
