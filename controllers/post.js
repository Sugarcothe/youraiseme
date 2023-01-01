import {Post} from "../model/Post.js";

export const createFundraiserPost = async (req, res, next) => {
  try {
    const post = new Post({
      ...req.body,
    });
    await post.save()
    res.status(200).json('FundRaiser post created')
  } catch (err) {
    res.status(400).json(err)
  }
};

export const getOneFundraiserPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  }catch(err){
    res.status(400).json(err)
  }
}

export const getManyFundraiserPost = async (req, res, next) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json(err);
  }
};