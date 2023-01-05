import { Post } from "../model/Post.js";

// CREATE FUNDRASIER POST
export const createFundraiserPost = async (req, res, next) => {
  try {
    const post = new Post({
      ...req.body,
    });
    await post.save();
    res.status(200).json("FundRaiser post created");
  } catch (err) {
    res.status(400).json(err);
  }
};

// UPDATE FUNDRAISER POST
export const updateFundraiserPost = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const post = await Post.findOneAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(post);
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(400).json("You cannot update others post");
  }
};

// DELETE FUNDRAISER POST
export const deleteFundraiserPost = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await Post.findOneAndRemove(req.params.id);
      res.status(200).json("Post deleted succesfully!");
    } catch (err) {
      res.status(400).json(err);
    }
  }else{
    res.status(400).json("You cannot delete others post");
  }
};

// GET ONE FUNDRAISER POST
export const getOneFundraiserPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(`Post updated succesfully`, post);
  } catch (err) {
    res.status(400).json(err);
  }
};

// GET MANY FUNDRAISER POST
export const getManyFundraiserPost = async (req, res, next) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json(err);
  }
};
