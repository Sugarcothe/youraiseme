import express from "express";
import {
  createFundraiserPost,
  getOneFundraiserPost,
} from "../controllers/post.js";

export const postRouter = express.Router();

postRouter.post("/createFundraiser", createFundraiserPost);
postRouter.get("/getOneFundraiser/:id", getOneFundraiserPost);
