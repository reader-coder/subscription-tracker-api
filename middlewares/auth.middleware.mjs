import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.mjs";
import User from "../models/user.model.mjs";

const authorize = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({
        message: "Unauthorized",
        error: error.message,
      });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
      error: error.message,
    });
  }
};

export default authorize;
