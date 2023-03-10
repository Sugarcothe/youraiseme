import express from "express";
import {
  createFundraiserPost,
  getOneFundraiserPost,
  getManyFundraiserPost,
  updateFundraiserPost,
  deleteFundraiserPost,
  donation
} from "../controllers/post.js";
import { verifyToken, verifyAdmin, verifyUser } from "../utils/verifyToken.js";

export const postRouter = express.Router();

postRouter.post(
  "/createFundraiser",
  verifyToken,
  verifyUser,
  createFundraiserPost
);
postRouter.get("/getOneFundraiser/:id", getOneFundraiserPost);
postRouter.get("/getManyFundraiser", getManyFundraiserPost);
postRouter.put(
  "/updateFundraiser/:id",
  verifyToken,
  verifyUser,
  updateFundraiserPost
);
postRouter.delete(
  "/deleteFundraiser/:id",
  verifyToken,
  verifyUser,
  deleteFundraiserPost
);

postRouter.put("/donate", donation)
