import { registerRootComponent } from "expo";
import { LogBox } from "react-native";
import "react-native-gesture-handler";
import App from "./App";

//Ignoring the require cycle error caused due to path alias (specifically using the index.ts in every folder).
LogBox.ignoreLogs([
  "Require cycle:",
  "useBottomSheetDynamicSnapPoints` will be deprecated in the next major release! please use the new introduce prop `enableDynamicSizing",
  "Constants.platform.ios.model has been deprecated in favor of expo-device's Device.modelName property. This API will be removed in SDK 45",
]);
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
