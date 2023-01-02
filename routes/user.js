import express from "express";
import {
  register,
  login,
  updateUser,
  deleteUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

export const userRouter = express.Router();

userRouter.post("/registerUser", register);
userRouter.post("/loginUser", login);
userRouter.put("/updateUser/:id", verifyToken, verifyUser, updateUser);
userRouter.delete("/deleteUser/:id", verifyAdmin, deleteUser);
