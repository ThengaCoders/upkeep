// app/components/SecurityLoginScreen.tsx

import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import styles from "../styles/SecurityLoginStyles";

export default function SecurityLoginScreen() {
  const [phone, setPhone] = useState("");

  const router = useRouter();

  const handleGetOTP = () => { 
    if (!/^\d{8,}$/.test(phone)) {
      console.log("Enter valid phone number");
      return;
    }

    router.push({
      pathname: "/otp",
      params: { phone },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* This removes the top native header look */}
      <StatusBar barStyle="dark-content" hidden={false} />

      {/* Main Content ONLY — header removed */}
      <View style={styles.content}>
        {/* Hero Icon */}
        <View style={styles.heroWrapper}>
          <View style={styles.heroCircle}>
            <MaterialIcons
              name="phonelink-lock"
              size={42}
              color="#002b82"
            />
          </View>
        </View>

        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>
            Enter your phone number
          </Text>

          <Text style={styles.subtitle}>
            We will send a 6-digit verification
            code to this number to secure your
            account.
          </Text>
        </View>

        {/* Phone Input Card */}
        <View style={styles.card}>
          <Text style={styles.label}>
            PHONE NUMBER
          </Text>

          <View style={styles.inputRow}>
            {/* Country Selector */}
            <TouchableOpacity style={styles.countryBox}>
              <Image
                source={{
                  uri: "https://flagcdn.com/w40/us.png",
                }}
                style={styles.flag}
              />

              <Text style={styles.countryCode}>
                +1
              </Text>

              <MaterialIcons
                name="keyboard-arrow-down"
                size={18}
                color="#747685"
              />
            </TouchableOpacity>

            {/* Phone Input */}
            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder="(555) 000-0000"
              placeholderTextColor="#B0B0B0"
              keyboardType="phone-pad"
              style={styles.input}
            />
          </View>
        </View>

        {/* Trust Badge */}
        <View style={styles.infoBox}>
          <MaterialIcons
            name="verified-user"
            size={22}
            color="#002b82"
            style={{ marginTop: 2 }}
          />

          <Text style={styles.infoText}>
            Your number is encrypted and used only
            for security verification. We never
            share your data.
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleGetOTP}>
            <Text style={styles.buttonText}>
              Get Verification Code
            </Text>

            <Ionicons
              name="arrow-forward"
              size={20}
              color="#fff"
            />
          </TouchableOpacity>

          <Text style={styles.footerText}>
            By continuing, you agree to our{" "}
            <Text style={styles.link}>
              Terms of Service
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}