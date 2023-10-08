import {
  Center,
  Box,
  Heading,
  VStack,
  HStack,
  Button,
  Text,
  FormControl,
  Input,
  Link,
  Icon,
} from 'native-base';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {IPageProps} from '../../@types/navigation';
import IconPerfil from 'react-native-vector-icons/MaterialCommunityIcons';

function Login({navigation}: IPageProps) {
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <HStack justifyContent='center'>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon as={IconPerfil} name="arrow-left" size={33} />
          </TouchableOpacity>
          <Heading
            size="lg"
            fontWeight="600"
            textAlign="center"
            color="coolGray.800"
            >
            Bem vindo!
          </Heading>
        </HStack>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Senha</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="4" bg="#007260">
            Login
          </Button>
          <HStack mt="6" justifyContent="center">
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}

export default Login;
