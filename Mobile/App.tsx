import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './app/common/store';
import Navigation from './navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  let persister = persistStore(store)

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <GestureHandlerRootView>
        <ReduxProvider store={store}>
          <PersistGate persistor={persister}>
            <PaperProvider>
              <Navigation />
            </PaperProvider>
          </PersistGate>
        </ReduxProvider>
        <StatusBar />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
