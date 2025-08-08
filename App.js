import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';

// Keep splash screen visible until manually hidden
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isWebViewLoaded, setIsWebViewLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [reloadKey, setReloadKey] = useState(0); // Force WebView reload

  // Called when the WebView finishes loading successfully
  const handleLoadEnd = useCallback(async () => {
    if (!hasError) {
      if (!isWebViewLoaded) {
        setIsWebViewLoaded(true);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Delay to show splash logo
        await SplashScreen.hideAsync();
      }
    }
  }, [hasError, isWebViewLoaded]);

  // Called when WebView load fails
  const handleError = useCallback(async () => {
    setHasError(true);
    await SplashScreen.hideAsync(); // Hide splash screen even on error
  }, []);

  // Retry logic
  const handleRetry = async () => {
    setHasError(false);
    setIsWebViewLoaded(false);
    setReloadKey(prev => prev + 1); // Reload WebView by changing key
    await SplashScreen.preventAutoHideAsync(); // Keep splash during reload
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {hasError ? (
        <View style={styles.centered}>
          <Text style={styles.errorText}>
            Something went wrong while loading the app.
          </Text>
          <Button title="Retry" onPress={handleRetry} />
        </View>
      ) : (
        <>
          {!isWebViewLoaded && (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="#d51d30" />
            </View>
          )}
          {!hasError && (
            <WebView
              key={reloadKey}
              source={{ uri: 'https://app.modconelectromech.com/Identity/Account/Login?companyCode=MOD' }}
              style={{ flex: 1 }}
              onLoadEnd={handleLoadEnd}
              onError={handleError}
              onHttpError={handleError}
              startInLoadingState={false}
            />
          )}
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  errorText: {
    marginBottom: 20,
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  loading: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d51d30',
    zIndex: 10,
  },
});
