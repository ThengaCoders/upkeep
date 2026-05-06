import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9ff",
  },

  header: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0b1c30",
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 32,
  },

  illustration: {
    width: 128,
    height: 128,
    alignSelf: "center",
    marginBottom: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0b1c30",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 24,
  },

  highlight: {
    color: "#003fb4",
    fontWeight: "600",
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  otpInput: {
    width: 48,
    height: 56,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 20,
  },

  timerText: {
    textAlign: "center",
    color: "#6b7280",
    marginBottom: 8,
  },

  resendText: {
    textAlign: "center",
    marginBottom: 24,
  },

  resendActive: {
    color: "#003fb4",
    fontWeight: "600",
  },

  resendDisabled: {
    color: "#9ca3af",
  },

  button: {
    backgroundColor: "#003fb4",
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#ffffff",
    fontWeight: "700",
  },

  infoBox: {
    marginTop: 24,
    padding: 16,
    backgroundColor: "#eef4ff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    flexDirection: "row",
  },

  infoText: {
    color: "#4b5563",
    fontSize: 12,
    flex: 1,
  },

  changeNumberText: {
    textAlign: "center",
    marginTop: 5,
    color: "#9CA3AF",
    fontWeight: "600",
  },

  footer: {
    paddingBottom: 24,
    alignItems: "center",
  },

  footerBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  footerText: {
    fontSize: 12,
    color: "#6b7280",
  },
});