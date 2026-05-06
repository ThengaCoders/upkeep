import { useRouter } from "expo-router";
import OtpVerification from "../src/components/otpVerification";

export default function OTPPage() {
  const router = useRouter();

  return (
    <OtpVerification
      onSuccess={() => router.replace("/")}
    />
  );
}