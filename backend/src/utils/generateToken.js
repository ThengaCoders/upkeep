import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export const generateToken = (user) => {
  return jwt.sign(
    { userId: user.id, phone: user.phone },
    env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};