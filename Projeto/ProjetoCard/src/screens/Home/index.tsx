import React from 'react';
import {HomeHeader} from '../../components/HomeHeader';
import {Container} from './style';
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
