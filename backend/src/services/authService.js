import { prisma } from "../config/prisma.js";
import { firebaseAdmin } from "../config/firebase.js";
import { generateToken } from "../utils/generateToken.js";

export const firebaseLoginService = async (idToken) => {
  // Verify Firebase token
  const decoded = await firebaseAdmin.auth().verifyIdToken(idToken);

  const phone = decoded.phone_number;

  if (!phone) throw new Error("Phone not found");

  // Find or create user
  let user = await prisma.user.findUnique({ where: { phone } });

  if (!user) {
    user = await prisma.user.create({
      data: { phone },
    });
  }

  // Generate JWT
  const token = generateToken(user);

  return {
    message: "Login successful",
    token,
    user,
  };
};