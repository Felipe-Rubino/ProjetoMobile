import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {StatusBar, View, ActivityIndicator} from 'react-native';
import {Routes} from './src/routes';
import theme from './src/theme';
import {ThemeProvider} from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NativeBaseProvider>
        <StatusBar
          barStyle={'light-content'}
          translucent
        />
        <Routes />
      </NativeBaseProvider>
    </ThemeProvider>
  );
}

export default App;
