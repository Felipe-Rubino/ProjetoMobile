import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from 'react';
import Inicial from "../screens/Inicial";
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Inicial"  component={Inicial} />
        </Navigator>    
    );
}