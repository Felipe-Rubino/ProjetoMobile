import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from 'react';
import Inicial from "../screens/Inicial";
import Login from "../screens/Login";
import { Home } from "../screens/Home";
import { Register } from "../screens/Register";

type AppRoutes = {
    Inicial : undefined;
    Login : undefined;
    Home : undefined;
    Cadastro : undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Inicial"  component={Inicial} />
            <Screen name="Login" component={Login} />
            <Screen name="Home" component={Home} />
            <Screen 
            name="Cadastro" 
            component={Register} 
            options={{headerShown : true, headerStyle: {
                backgroundColor: '#007260'
            },
            headerTitleAlign: 'center',
            headerTintColor: '#FFF'
            }}/>
        </Navigator>    
    );
}