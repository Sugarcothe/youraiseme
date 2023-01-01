import express from "express"
import {register, login} from "../controllers/user.js"

export const userRouter = express.Router();

userRouter.post("/registerUser", register)
userRouter.post("/loginUser", login);

