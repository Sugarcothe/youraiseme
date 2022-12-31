import { User } from "../model/User.js";
import bcrypt from "bcryptjs";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const user = new User({
      ...req.body,
      password: hash,
    });

    await user.save();
    res.status(200).json(`User ${user.firstName} Account created succesfully`);
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const user = await User.findOne({
        email: req.body.email,
        password: hash
    })
    res.status(200).json(`User logged in succesfully`);
  } catch (err) {
    next(err);
  }
};


