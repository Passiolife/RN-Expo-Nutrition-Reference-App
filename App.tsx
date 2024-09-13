import React from "react";
import {
  usePassioConfig,
  ServicesProvider,
  BrandingProvider,
} from "@passiolife/nutrition-ai-ui-ux";
import { AppNavigator } from "./src/Navigator";
export default function App() {
  const { isReady } = usePassioConfig({
    key: "",
  });
  console.log("isReady", isReady);
  return (
    <ServicesProvider>
      <BrandingProvider>
        <AppNavigator />
      </BrandingProvider>
    </ServicesProvider>
  );
}
