import mongoose from "mongoose";

let isConnected = false;

export const ConnectToDb = async () => {
  try {
    if(isConnected){
      console.log("Database is already connected!");
      return;
    }

    const dbURI = process.env.DB_URI?.toString();

    if (!dbURI) {
      throw new Error("Database URI not provided in environment variables.");
    }

    // Connecting to db
    await mongoose.connect(dbURI);
    isConnected = true;

    console.log("Connected to DB successfully!");
  } catch (error) {
    console.error("Error connecting to DB:", error);
    process.exit(1); // Exit the process with a failure code
  }
};
