import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { enableScreens } from "react-native-screens";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { PassioScreens } from "../../node_modules/@passiolife/nutrition-ai-ui-ux/src/navigaitons/PassioScreen";


const Stack = createNativeStackNavigator();
enableScreens();
export const AppNavigator = () => { 
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };

  return (
    <>
        <NavigationContainer independent theme={navTheme}>
          <Stack.Navigator
            screenOptions={{ gestureEnabled: false, animation: "simple_push" }}
            initialRouteName={"PassioNutritionSDK"}>
            <Stack.Screen
              options={{ headerShown: false }}
              name={"PassioNutritionSDK"}
              component={PassioScreens}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </>
  );
};