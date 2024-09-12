import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { usePassioConfig } from "@passiolife/nutrition-ai-ui-ux";
import { ServicesProvider } from "@passiolife/nutrition-ai-ui-ux";
import { BrandingProvider } from "@passiolife/nutrition-ai-ui-ux";
import { AppNavigator } from "./src/Navigator";
export default function App () {
  
  
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