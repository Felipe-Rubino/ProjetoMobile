import React from 'react';
import { StatusBar, View } from 'react-native';
import { Routes } from './src/routes';
import theme from './src/theme';
import { ThemeProvider } from "styled-components";

function App(){
  return (
   <ThemeProvider theme={theme}>
    <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
    />
    <Routes />
  </ThemeProvider>
  )
    

}


export default App;
