import {
  Center,
  Box,
  Heading,
  VStack,
  HStack,
  Button,
  Text,
  FormControl,
  Icon,
} from 'native-base';
import React, {useContext, useState, useEffect} from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import {IPageProps} from '../../@types/navigation';
import IconPerfil from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../../context/authContext';
import Input from '../../components/Input';
import {createSession} from '../../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({navigation}: IPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const context = useContext(AuthContext);
  const emailPattern = /@neki-it\.com\.br$/;

  useEffect(() => {
    async function checkToken() {
      const token = await AsyncStorage.getItem('token');
      const loggedUserId = await AsyncStorage.getItem('loggedUserId');

      if (token && loggedUserId) {
        context.setCurrentUserId(JSON.parse(loggedUserId));
        // context.setToken(token);
        context.setIsAuthenticated(true);
      }
    }
    checkToken();
  }, []);

  const handleLogin = async () => {
    try {
      if (!emailPattern.test(email)) {
        Alert.alert('O e-mail deve terminar com @neki!');
        return;
      }
      const response = await createSession(email, password);
      console.log(response);
      AsyncStorage.setItem('token', response.token);
      AsyncStorage.setItem(
        'loggedUserId',
        JSON.stringify(response.loggedUserId),
      );
      navigation.navigate('Home');
      context.setIsAuthenticated(true);
      context.setToken(response.token);
      context.setCurrentUserId(response.loggedUserId);
      return;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <HStack justifyContent="center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon as={IconPerfil} name="arrow-left" size={33} />
          </TouchableOpacity>
          <Heading
            size="lg"
            fontWeight="600"
            textAlign="center"
            color="coolGray.800">
            Bem vindo!
          </Heading>
        </HStack>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={texto => setEmail(texto)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Senha</FormControl.Label>
            <Input
              placeholder="Senha"
              keyboardType="default"
              secureTextEntry
              value={password}
              onChangeText={texto => setPassword(texto)}
            />
          </FormControl>
          <Button mt="4" bg="#007260" onPress={handleLogin}>
            Login
          </Button>
          <HStack mt="6" justifyContent="center"></HStack>
        </VStack>
      </Box>
    </Center>
  );
}

export default Login;
