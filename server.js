import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { userAPI } from "./routes/user.js";

const server = express();
dotenv.config();


server.use(express.json())
server.use('/api/v1/users', userAPI)

mongoose.set("strictQuery", false);

try {
  await mongoose.connect(process.env.MONGODB);
  console.log("DB Connection established");
} catch (err) {
  console.log(err);
}

server.listen(
  process.env.PORT,
  console.log(`server listening on ${process.env.PORT}`)
);
