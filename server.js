import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/user.js";
import { postRouter } from "./routes/post.js";

const server = express();
dotenv.config();

server.use(express.json());
server.use(cookieParser());
server.use("/api/v1/users", userRouter);
server.use("/api/v1/posts", postRouter);

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
