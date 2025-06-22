import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connectionString = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );
    console.log("mongodb connected");
    // datainitialise();
  } catch (error) {
    console.log("ERROR:", error);
    process.exit(1);
  }
};

// Nitin Singh import {datainitialise} from "./dbinitialise.js";
export default connectDb;
