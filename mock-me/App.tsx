import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from './navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './app/common/store';

export default function App() {
  let persister = persistStore(store)
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
       <ReduxProvider store={store}>
          <PersistGate persistor={persister}>
            <PaperProvider>
              <Navigation />
            </PaperProvider>
          </PersistGate>
        </ReduxProvider>
    </SafeAreaProvider>
  );
}
