// app/styles/SecurityLoginStyles.ts

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FF",
  },

  /* HEADER */

  header: {
    height: 64,
    justifyContent: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#DCE9FF",
    backgroundColor: "#FFFFFF",
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 14,
    color: "#0B1C30",
  },

  /* CONTENT */

  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 24,
  },

  /* HERO */

  heroWrapper: {
    alignItems: "center",
    marginBottom: 32,
  },

  heroCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "rgba(0,43,130,0.08)",
    justifyContent: "center",
    alignItems: "center",
  },

  /* TITLE */

  titleSection: {
    alignItems: "center",
    marginBottom: 28,
  },

  title: {
    fontSize: 30,
    fontWeight: "600",
    color: "#0B1C30",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 24,
    color: "#5A5F68",
    textAlign: "center",
    paddingHorizontal: 10,
  },

  /* CARD */

  card: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#C4C5D6",
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
  },

  label: {
    fontSize: 13,
    fontWeight: "700",
    color: "#434653",
    marginBottom: 10,
    letterSpacing: 0.5,
  },

  inputRow: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#C4C5D6",
    borderRadius: 12,
    overflow: "hidden",
    alignItems: "center",
  },

  countryBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 16,
    backgroundColor: "#EFF4FF",
    borderRightWidth: 1,
    borderRightColor: "#C4C5D6",
  },

  flag: {
    width: 24,
    height: 16,
    borderRadius: 2,
    marginRight: 8,
  },

  countryCode: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0B1C30",
    marginRight: 4,
  },

  input: {
    flex: 1,
    height: 56,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#0B1C30",
  },

  /* INFO BOX */

  infoBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "rgba(0,43,130,0.05)",
    borderWidth: 1,
    borderColor: "rgba(0,43,130,0.08)",
    borderRadius: 14,
    padding: 16,
  },

  infoText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    lineHeight: 22,
    color: "#434653",
  },

  /* FOOTER */

  footer: {
    marginTop: "auto",
    paddingTop: 40,
  },

  button: {
    height: 56,
    borderRadius: 12,
    backgroundColor: "#002B82",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    marginRight: 8,
  },

  footerText: {
    textAlign: "center",
    marginTop: 18,
    fontSize: 14,
    color: "#747685",
  },

  link: {
    color: "#002B82",
    fontWeight: "600",
  },
});

export default styles;