import React from 'react';
import { StatusBar, View, ActivityIndicator } from 'react-native';
import { Routes } from './src/routes';
import theme from './src/theme';
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

function App(){

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
   <ThemeProvider theme={theme}>
    <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
    />
    { fontsLoaded ? <Routes /> : <ActivityIndicator /> }
  </ThemeProvider>
  )
    

}


export default App;
