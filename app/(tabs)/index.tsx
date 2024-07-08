import { StyleSheet } from "react-native";

import { View, Text, ActivityIndicator } from 'react-native';
import {
  PassioSDK,
  DetectionCameraView
} from '@passiolife/nutritionai-react-native-sdk-v3';

import { useEffect, useState } from "react";

export default function HomeScreen() {
  const [loadingState, setLoadingState] = useState('loading');
  const [isCameraAuthorized, setCameraAuthorized] = useState(false);
  const key = "PASSIO_LICENSE_KEY";
  const debugMode = true; 
  const autoUpdate = true; 

  useEffect(() => {
    async function configurePassioSDK() {
      try {
        const status = await PassioSDK.configure({
          key: key,
          debugMode: debugMode,
          autoUpdate: autoUpdate,
        });

        switch (status.mode) {
          case 'notReady':
            setLoadingState('notReady');
            console.log('SDK not ready');
            break;
          case 'isReadyForDetection':
            setLoadingState('ready');
            console.log('SDK is ready for detection');
            break;
          case 'isBeingConfigured':
            setLoadingState('configuring');
            console.log('SDK is being configured');
            break;
          case 'error':
            setLoadingState('error');
            console.error(`PassioSDK Error: ${status.errorMessage}`);
            break;
          default:
            setLoadingState('error');
            console.error('Unknown SDK status');
        }
      } catch (err) {
        setLoadingState('error');
        console.error(`PassioSDK Error: ${err}`);
      }
    }

    configurePassioSDK();
  }, [key, debugMode, autoUpdate]);


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loadingState === 'loading' && <ActivityIndicator size="large" color="blue" />}
      {loadingState === 'notReady' && <Text>SDK not ready. Please download required files.</Text>}
      {loadingState === 'configuring' && <Text>SDK is being configured...</Text>}
      {loadingState === 'error' && <Text>Error configuring PassioSDK. Please check logs.</Text>}
      {loadingState === 'ready' && isCameraAuthorized && <Text>PassioSDK configured and camera authorized.</Text>}
      {loadingState === 'ready' && !isCameraAuthorized && <Text>PassioSDK configured, waiting for camera authorization...</Text>}

    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
