import { firebaseLoginService } from "../services/authService.js";

export const firebaseLogin = async (req, res, next) => {
  try {
    const { idToken } = req.body;

    const result = await firebaseLoginService(idToken);

    res.json(result);
  } catch (err) {
    next(err);
  }
};