import mongoose from "mongoose";
import senha from "../../auth.js";

mongoose.connect(
  `mongodb+srv://marcelino:${senha}@cluster0.9xif6gu.mongodb.net/marcelino-node`
);

let db = mongoose.connection;

export default db;
