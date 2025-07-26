import React from 'react';
import { SafeAreaView, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView 
        source={{ uri: 'https://app.modconelectromech.com' }} // replace with your actual web app URL
        style={{ flex: 1 }} 
      />
    </SafeAreaView>
  );
}
