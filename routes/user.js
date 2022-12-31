import express from "express"
import {register, login} from "../controllers/user.js"

export const userAPI = express.Router();

userAPI.post("/registerUser", register)
userAPI.post("/loginUser", login);

