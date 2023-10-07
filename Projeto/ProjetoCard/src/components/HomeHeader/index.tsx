import React from 'react';
import {Button, HStack, Heading, Icon, IconButton, VStack} from 'native-base';
import {LogoFoto} from '../LogoFoto';
import IconPerfil from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity, Alert} from 'react-native';
import { IPageProps } from '../../@types/navigation';
import { NavigationProp } from '@react-navigation/native';


export function HomeHeader( {navigation} : IPageProps ) {


  function handleRegister() {
    navigation.navigate('Cadastro');
  }

  return (
    <HStack bg="#007260" pt={5}  px={3}>
      <VStack flex={1}>
        <Button size={35} bg="transparent" _pressed={{bg : 'transparent'}} onPress={handleRegister} >
        <Icon
          as={IconPerfil}
          name="account-plus-outline"
          size={35}
          color="white"
        />
        </Button>
      </VStack>
      <VStack flex={1} mr={7}>
        <LogoFoto
          source={require('../../assets/images/neki.png')}
          alt="Imagem da empresa"
          size={16}
          borderColor='transparent'
        />
      </VStack>
      <VStack>
        <TouchableOpacity>
          <Icon as={IconPerfil} name="logout" size={35} color="white" />
        </TouchableOpacity>
      </VStack>
    </HStack>
  );
}
