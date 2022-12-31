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

    await user.save()
    res.status(200).json(`User ${user.firstName} Account created succesfully`, user)
  } catch (err) {
    next(err)
  }
};
