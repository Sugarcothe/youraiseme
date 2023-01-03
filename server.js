import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import { userRouter } from "./routes/user.js";
import { postRouter } from "./routes/post.js";
import { stripeRouter } from "./routes/stripe.js";

const server = express();
dotenv.config();
server.use(cors());

server.use(express.json());
server.use(cookieParser());
server.use(bodyParser.json());
server.use("/api/v1/users", userRouter);
server.use("/api/v1/posts", postRouter);
server.use("/payment", stripeRouter);

mongoose.set("strictQuery", false);

try {
  await mongoose.connect(process.env.MONGODB);
  console.log("DB Connection established");
} catch (err) {
  console.log(err);
}

server.listen(
  process.env.PORT || 8000,
  console.log(`server listening on ${process.env.PORT}`)
);
