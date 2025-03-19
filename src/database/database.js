import mongoose from "mongoose";

const databaseConnection = async () => {
  try {
    await mongoose.connect("mongodb+srv://hassan4strokes:hassan4strokes@cluster0.pacbc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Database Connected Successfully!");
  } catch (error) {
    console.log(`Some Error Occured While Connecting To Database : ${error}`);
  }
};

export default databaseConnection;
