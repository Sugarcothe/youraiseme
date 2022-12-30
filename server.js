import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const server = express();
dotenv.config();

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB).catch((error) => console.log(error));

// To handle errors after initial connection
mongoose.connection.on("error", (err) => {
  console.log("Error occur after initial connection on mongoDb db: " + err);
});

mongoose.connection.on("connect", () => {
  console.log("DB Connection established");
});

server.listen(
  process.env.PORT,
  console.log(`server listening on ${process.env.PORT}`)
);
