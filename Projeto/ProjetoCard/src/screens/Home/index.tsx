import React from 'react';
import {Text, View} from 'react-native';
import {HomeHeader} from '../../components/HomeHeader';
import {Container} from './style';
import {HStack, Heading, VStack} from 'native-base';
import CardHome from '../../components/Card';

export function Home() {
  return (
    <Container>
      <VStack flex={1} bg={'#FFFFFF'}>
        <HomeHeader />
        <CardHome />
      </VStack>
    </Container>
  );
}
