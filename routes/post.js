import express from "express";
import {
  createFundraiserPost,
  getOneFundraiserPost,
  getManyFundraiserPost,
  updateFundraiserPost,
  deleteFundraiserPost
} from "../controllers/post.js";

export const postRouter = express.Router();

postRouter.post("/createFundraiser", createFundraiserPost);
postRouter.get("/getOneFundraiser/:id", getOneFundraiserPost);
postRouter.get("/getManyFundraiser", getManyFundraiserPost);
postRouter.put("/updateFundraiser/:id", updateFundraiserPost);
postRouter.delete("/deleteFundraiser/:id", deleteFundraiserPost);
