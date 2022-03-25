import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestaurantsScreen } from "./features/restaurants/screens/restaurants-screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useOswald,
  Oswald_400Regular
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [latoLoaded] = useLato({
    Lato_400Regular
  });
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  } else {
    return (
      <>
        <ThemeProvider theme={theme}>
          <RestaurantsScreen />
          <ExpoStatusBar style='auto' />
        </ThemeProvider>
      </>
    );
  }
}
