import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {StatusBar, View, ActivityIndicator} from 'react-native';
import {Routes} from './src/routes';
import theme from './src/theme';
import {ThemeProvider} from 'styled-components';
import { AuthProvider } from './src/context/authContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
      <NativeBaseProvider>
        <StatusBar
          barStyle={'light-content'}
          translucent
        />
        <Routes />
      </NativeBaseProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
