import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function Layout() {
  return (
    <View style={styles.container}>
      <View style={styles.appWrapper}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    alignItems: "center",
  },

  appWrapper: {
    flex: 1,
    width: "100%",
    maxWidth: 430, // phone-like width
    backgroundColor: "white",
  },
});