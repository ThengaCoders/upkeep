import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  Modal,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // 1. Added useRouter import

// The missing piece: Importing the full data file
import { ALL_COUNTRIES } from "../constants/countries"; 
import styles from "../styles/SecurityLoginStyles";

export default function SecurityLoginScreen() {
  const router = useRouter(); // 2. Initialize router
  const [phone, setPhone] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  // Find India as the default starting country
  const defaultCountry = ALL_COUNTRIES.find(c => c.iso === "IN") || ALL_COUNTRIES[0];
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);

  // Search Logic: Filters the 200+ list as the user types
  const filteredCountries = useMemo(() => {
    return ALL_COUNTRIES.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.includes(searchQuery)
    );
  }, [searchQuery]);

  const selectCountry = (country: typeof selectedCountry) => {
    setSelectedCountry(country);
    setIsModalVisible(false);
    setSearchQuery(""); 
  };

  // 3. New Navigation and Validation Logic
  const handleGetOTP = () => { 
    // Basic validation: checks if there are at least 8 digits
    if (!/^\d{8,}$/.test(phone)) {
      console.log("Enter valid phone number");
      alert("Please enter a valid phone number (at least 8 digits)");
      return;
    }

    // Navigates to app/otp.tsx and passes the phone number as a param
    router.push({
      pathname: "/otp",
      params: { phone: `${selectedCountry.code}${phone}` },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.content}>
        {/* Hero Section */}
        <View style={styles.heroWrapper}>
          <View style={styles.heroCircle}>
            <MaterialIcons name="phonelink-lock" size={42} color="#002b82" />
          </View>
        </View>

        <View style={styles.titleSection}>
          <Text style={styles.title}>Enter your phone number</Text>
          <Text style={styles.subtitle}>
            We'll send a 6-digit code to verify your identity and keep your account safe.
          </Text>
        </View>

        {/* Phone Input Card */}
        <View style={styles.card}>
          <Text style={styles.label}>PHONE NUMBER</Text>

          <View style={styles.inputRow}>
            <TouchableOpacity 
              style={styles.countryBox} 
              onPress={() => setIsModalVisible(true)}
            >
              <Image 
                source={{ uri: `https://flagcdn.com/w40/${selectedCountry.iso.toLowerCase()}.png` }} 
                style={styles.flag} 
              />
              <Text style={styles.countryCode}>{selectedCountry.code}</Text>
              <MaterialIcons name="keyboard-arrow-down" size={18} color="#747685" />
            </TouchableOpacity>

            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder="00000 00000"
              placeholderTextColor="#B0B0B0"
              keyboardType="phone-pad"
              style={styles.input}
            />
          </View>
        </View>

        {/* Country Picker Modal */}
        <Modal visible={isModalVisible} animationType="slide">
          <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Select Country</Text>
                <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                  <Ionicons name="close" size={28} color="#000" />
                </TouchableOpacity>
              </View>

              <View style={{ 
                flexDirection: 'row', 
                backgroundColor: '#F0F2F5', 
                borderRadius: 12, 
                padding: 12, 
                marginTop: 15,
                alignItems: 'center'
              }}>
                <Ionicons name="search" size={20} color="#747685" />
                <TextInput 
                  placeholder="Search name or country code..."
                  style={{ flex: 1, marginLeft: 10, fontSize: 16 }}
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  autoFocus={false}
                />
              </View>
            </View>

            <FlatList
              data={filteredCountries}
              keyExtractor={(item) => item.iso}
              keyboardShouldPersistTaps="handled"
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={{ 
                    flexDirection: 'row', 
                    padding: 18, 
                    borderBottomWidth: 0.5, 
                    borderBottomColor: '#eee',
                    alignItems: 'center' 
                  }}
                  onPress={() => selectCountry(item)}
                >
                  <Image 
                    source={{ uri: `https://flagcdn.com/w40/${item.iso.toLowerCase()}.png` }} 
                    style={{ width: 30, height: 20, marginRight: 15, borderRadius: 2 }} 
                  />
                  <Text style={{ flex: 1, fontSize: 16, color: '#1C1C1E' }}>{item.name}</Text>
                  <Text style={{ color: '#747685', fontWeight: '500' }}>{item.code}</Text>
                </TouchableOpacity>
              )}
            />
          </SafeAreaView>
        </Modal>

        {/* Trust Badge */}
        <View style={styles.infoBox}>
          <MaterialIcons name="verified-user" size={22} color="#002b82" style={{ marginTop: 2 }} />
          <Text style={styles.infoText}>
            Your number is encrypted and used only for security. We never share your data.
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          {/* 4. Connected onPress handler */}
          <TouchableOpacity 
            style={[styles.button, { opacity: phone.length > 5 ? 1 : 0.6 }]}
            onPress={handleGetOTP}
            disabled={phone.length < 5}
          >
            <Text style={styles.buttonText}>Get Verification Code</Text>
            <Ionicons name="arrow-forward" size={20} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.footerText}>
            By continuing, you agree to our <Text style={styles.link}>Terms of Service</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}