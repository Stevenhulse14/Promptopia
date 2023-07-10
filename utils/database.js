import mongoose from "mongoose";

let isConnected = false; // Database connection status

const connectToDatabase = async () => {
  // Connect to database
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("=> using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.MONGODB_DB,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState;
    console.log("=> Mongodb is connected ");
  } catch (error) {
    console.error(
      "=> an error occurred when connecting to the database",
      error
    );
  }
};
