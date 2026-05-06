import dotenv from "dotenv";
dotenv.config();

export const env = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  FAST2SMS_API_KEY: process.env.FAST2SMS_API_KEY,
  JWT_SECRET: process.env.JWT_SECRET,
  OTP_EXPIRY_MINUTES: Number(process.env.OTP_EXPIRY_MINUTES),
  OTP_COOLDOWN_SECONDS: Number(process.env.OTP_COOLDOWN_SECONDS),
};