import { Post } from "../model/Post.js";

// CREATE FUNDRASIER POST
export const createFundraiserPost = async (req, res, next) => {
  try {
    const post = new Post({ userId: req.user.id, ...req.body });
    await post.save();
    res.status(200).json("FundRaiser post created");
  } catch (err) {
    res.status(400).json(err);
  }
};

// UPDATE FUNDRAISER POST
export const updateFundraiserPost = async (req, res, next) => {
  if (req.user.id === Post.userId) {
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
  } else {
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

// SEARCH FUNDRAISER POST
export const searchFundraiserPost = async (req, res, next) => {
  const query = req.query.q;
  try {
    await Video.find({
      title: { $regex: query, $options: i },
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
// GET MANY RANDOM FUNDRAISER POST
export const getManyFundraiserPost = async (req, res, next) => {
  try {
    const post = await Post.aggregate([{ $sample: { size: 20 } }]);
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json(err);
  }
};

// DONATION
export const donation = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.user.id, {
      $push: { fundRaised: req.params.id },
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
