import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E6F0",
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "500",
    marginLeft: 16,
    color: "#111",
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },

  heroCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#E9EDF7",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    color: "#111",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: "center",
    color: "#555",
    marginBottom: 36,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#D7DCE8",
    padding: 20,
    marginBottom: 24,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 14,
    color: "#222",
  },

  inputRow: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#CBD2E1",
    borderRadius: 12,
    overflow: "hidden",
  },

  countryBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    backgroundColor: "#EEF2FA",
    borderRightWidth: 1,
    borderRightColor: "#CBD2E1",
  },

  flag: {
    fontSize: 18,
  },

  countryCode: {
    fontSize: 18,
    marginHorizontal: 8,
    color: "#222",
  },

  input: {
    flex: 1,
    paddingHorizontal: 18,
    fontSize: 20,
    color: "#111",
    height: 70,
  },

  infoBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#F1F4FB",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#DCE2F0",
    padding: 18,
    marginBottom: 40,
  },

  infoText: {
    flex: 1,
    marginLeft: 14,
    fontSize: 17,
    lineHeight: 28,
    color: "#222",
  },

  button: {
    height: 60,
    backgroundColor: "#052B91",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "auto",
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
    marginRight: 10,
  },

  footerText: {
    textAlign: "center",
    marginTop: 24,
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },

  link: {
    color: "#052B91",
    fontWeight: "600",
  },
});