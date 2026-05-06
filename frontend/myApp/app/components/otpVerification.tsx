import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "../styles/otpVerificationStyles";

type Props = {
  onSuccess?: () => void;
};

export default function OtpVerification({ onSuccess }: Props) {
  const router = useRouter();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(58);
  const [error, setError] = useState("");

  const inputs = useRef<Array<TextInput | null>>([]);

  // Handle input
  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    setError("");

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  // Timer
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // Verify OTP (mock)
  const handleVerify = () => {
    const code = otp.join("");

    if (code.length < 6) {
      setError("Please enter complete OTP");
      return;
    }

    if (code === "123456") {
      setError("");
      onSuccess?.();
    } else {
      setError("Invalid OTP");
    }
  };

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={{ fontSize: 18 }}>←</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Security Login</Text>

        <View style={{ width: 24 }} />
      </View>

      {/* Content */}
      <View style={styles.content}>

        <Image
          source={{
            uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS5g5PYx4tcg5uFcjKgf_nR7uf1UQW4dOLfICiGR9OSdRt2HdG--SVJ0NUcfIixCp46IYwdLK-2HRcMypWDaHhQanB1HmZvwKLZLm6_k52qLby-v0j_aslq-1sYu-G19KBtGfIR47xLAfbcJRoYFTGCYeLCOAwmu6wi3NGXDjQMUPqES3Azq5KGW6cKANMVYqog5IGjMY2L0qrZQocOJgMD8fkfnFi7DaCyWy3c_zrYRwVJjNsO3fLsjghskOVTzJRechqXluZSjI",
          }}
          style={styles.illustration}
        />

        <Text style={styles.title}>Verify your number</Text>

        <Text style={styles.subtitle}>
          We've sent a 6-digit verification code to{" "}
          <Text style={styles.highlight}>
            +1 (555) ••• ••89
          </Text>
        </Text>

        {/* OTP Inputs */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => {
                inputs.current[index] = ref;
              }}
              value={digit}
              onChangeText={(val) => handleChange(val, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              maxLength={1}
              keyboardType="numeric"
              style={styles.otpInput}
            />
          ))}
        </View>

        {/* Error */}
        {error ? (
          <Text style={{ color: "red", textAlign: "center", marginBottom: 10 }}>
            {error}
          </Text>
        ) : null}

        {/* Timer */}
        <Text style={styles.timerText}>
          Resend code in{" "}
          <Text style={styles.highlight}>
            0:{timer < 10 ? `0${timer}` : timer}
          </Text>
        </Text>

        {/* Resend */}
        <TouchableOpacity
          disabled={timer !== 0}
          onPress={() => {
            setTimer(58);
            setError("");
          }}
        >
          <Text
            style={[
              styles.resendText,
              timer === 0
                ? styles.resendActive
                : styles.resendDisabled,
            ]}
          >
            Didn't receive the code? Resend now
          </Text>
        </TouchableOpacity>

        {/*Change Number */}
        {timer === 0 && (
          <TouchableOpacity onPress={() => router.replace("/")}>
            <Text style={styles.changeNumberText}>
              Change Number
            </Text>
          </TouchableOpacity>
        )}

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleVerify}
        >
          <Text style={styles.buttonText}>
            Verify & Continue →
          </Text>
        </TouchableOpacity>

        {/* Info */}
        <View style={styles.infoBox}>
          <Text style={{ marginRight: 6 }}>ℹ️</Text>
          <Text style={styles.infoText}>
            For your security, this code will expire in 10 minutes.
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerBadge}>
          <Text style={{ marginRight: 4 }}>🔒</Text>
          <Text style={styles.footerText}>
            Secure 256-bit Encrypted Connection
          </Text>
        </View>
      </View>
    </View>
  );
}