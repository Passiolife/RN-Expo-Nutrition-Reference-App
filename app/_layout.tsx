import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { usePassioConfig } from "../node_modules/@passiolife/nutrition-ai-ui-ux/src/hooks/usePassioAuthConfig";
import { ServicesProvider } from "../node_modules/@passiolife/nutrition-ai-ui-ux/src/contexts/services/ServicesContext";
import { BrandingProvider } from "../node_modules/@passiolife/nutrition-ai-ui-ux/src/contexts/branding/BrandingContext";
import { AppNavigator } from "./src/Navigation";
export default function App() {
  const { isReady, leftFile } = usePassioConfig({ 
    key: "", 
  });
  console.log("isReady", isReady);
  return (
    <>
      <ServicesProvider>
        <BrandingProvider>
          <AppNavigator /> 
        </BrandingProvider>
      </ServicesProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});