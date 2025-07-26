import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); // Keep splash visible until app is ready

export default function App() {
  const [isWebViewLoaded, setIsWebViewLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [reloadKey, setReloadKey] = useState(0); // forces WebView reload

  const hideSplash = useCallback(async () => {
    if (!isWebViewLoaded) {
      setIsWebViewLoaded(true);
      await new Promise(resolve => setTimeout(resolve, 2000)); // delay to show logo
      await SplashScreen.hideAsync();
    }
  }, [isWebViewLoaded]);

  const handleLoadEnd = useCallback(() => {
    if (!hasError) {
      hideSplash();
    }
  }, [hasError, hideSplash]);

  const handleError = useCallback(() => {
    setHasError(true);
    SplashScreen.hideAsync(); // Ensure splash hides even on error
  }, []);

  const handleRetry = () => {
    setHasError(false);
    setIsWebViewLoaded(false);
    setReloadKey(prev => prev + 1);
    SplashScreen.preventAutoHideAsync(); // keep splash again if retry
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {hasError ? (
        <View style={styles.centered}>
          <Text style={styles.errorText}>Something went wrong while loading the app.</Text>
          <Button title="Retry" onPress={handleRetry} />
        </View>
      ) : (
        <>
          {!isWebViewLoaded && (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="#d51d30" />
            </View>
          )}
          <WebView
            key={reloadKey}
            source={{ uri: 'https://app.modconelectromech.com' }}
            style={{ flex: 1 }}
            onLoadEnd={handleLoadEnd}
            onError={handleError}
            onHttpError={handleError}
          />
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
