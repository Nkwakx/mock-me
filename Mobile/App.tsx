import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './app/common/store';
import Navigation from './navigation';
import { Provider as PaperProvider, Provider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';

export default function App() {
  let persister = persistStore(store)

    return (
      <PaperProvider>
        <SafeAreaProvider>
        <ReduxProvider store={store}>
          <PersistGate persistor={persister}> 
            <Navigation />
           </PersistGate> 
        </ReduxProvider>
        <StatusBar />
      </SafeAreaProvider>
      </PaperProvider>
    );
  }
