// app/index.tsx

import SecurityLoginScreen from "./components/SecurityLoginScreen";

export default function HomeScreen() {
  return <SecurityLoginScreen />;
}

/*
IMPORTANT:
If "index" is still showing at the top,
that is Expo Router's default header.

Fix it by adding this:

export const options = {
  headerShown: false,
};

OR if using app/(tabs)/index.tsx,
put this inside your Stack config.
*/