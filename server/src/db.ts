import mongoose from "mongoose";

const connection = (): void => {
  mongoose.connect(<string>process.env.MONGO_URI);

  const db = mongoose.connection;

  db.once("open", () => {
    console.log("Database connected succesfully !");
  });
};

export default connection;
