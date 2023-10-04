import React from "react";
import { Text, View } from "react-native";
import { HomeHeader } from "../../components/HomeHeader";
import { Container } from "./style";
import { HStack, Heading, VStack } from 'native-base'

export function Home() {
    return(
    <VStack flex={1} bg="#007260" pt={16} pb={5} px={8} alignItems="center">
        <HomeHeader />
    </VStack>
    )
    
}