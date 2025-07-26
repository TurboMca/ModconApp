import React, { useEffect } from 'react';
import { SafeAreaView, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync(); // Prevent hiding until we say so

export default function App() {
  useEffect(() => {
    const prepare = async () => {
      // Wait for 2 seconds (or however long you want)
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Then hide the splash screen
      await SplashScreen.hideAsync();
    };

    prepare();
  }, []);
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView 
        source={{ uri: 'https://app.modconelectromech.com' }} // replace with your actual web app URL
        style={{ flex: 1 }} 
      />
    </SafeAreaView>
  );
}
