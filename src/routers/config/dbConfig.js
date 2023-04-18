import mongoose from "mongoose";
export const dbConnection = () => {
  try {
    const connStr = process.env.MONGO_CLIENT;
    if (!connStr) {
      return console.log(
        "Thers is no mongodb connection string availabe at process.env.MONGO_CLIENT"
      );
    }
    const conn = mongoose.connect(connStr);
    conn && console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
