import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://marcelino:123@cluster0.9xif6gu.mongodb.net/marcelino-node"
);

let db = mongoose.connection;

export default db;
