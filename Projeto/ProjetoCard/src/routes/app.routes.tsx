import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from 'react';
import Inicial from "../screens/Inicial";
import Login from "../screens/Login";
import { Home } from "../screens/Home";

type AppRoutes = {
    Inicial : undefined;
    Login : undefined;
    Home : undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Inicial"  component={Inicial} />
            <Screen name="Login" component={Login} />
            <Screen name="Home" component={Home} />
        </Navigator>    
    );
}