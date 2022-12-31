import express from "express"
import {register} from "../controllers/user.js"

export const userAPI = express.Router();

userAPI.post("/registerUser", register)

