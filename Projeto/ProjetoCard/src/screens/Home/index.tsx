import React from 'react';
import {Text, View} from 'react-native';
import {HomeHeader} from '../../components/HomeHeader';
import {Container} from './style';
import {HStack, Heading, VStack} from 'native-base';
import CardHome from '../../components/Card';
import { IPageProps } from '../../@types/navigation';


export function Home( {navigation} : IPageProps ) {
  return (
    <Container>
        <HomeHeader navigation={navigation}  />
        <CardHome />
    </Container>
  );
}
