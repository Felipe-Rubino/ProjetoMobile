import React, {useState} from 'react';
import Input from '../../components/Input';
import {Center, ScrollView, VStack, Skeleton, Text} from 'native-base';
import {LogoFoto} from '../../components/LogoFoto';
import {launchImageLibrary} from 'react-native-image-picker';
import {TouchableOpacity, Alert} from 'react-native';
import {FraseErro} from './style';
import {cadastroColaborador} from '../../service/api';
import {IPageProps} from '../../@types/navigation';
import HeaderIconAdm from '../../components/HeaderIconAdm';
import Button from '../../components/Button';

const PHOTO_SIZE = 150;

const ImagemPadrao = require('../../assets/images/neki.png');

export function Register({navigation}: IPageProps) {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState<any>();
  const [email, setEmail] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [nomeSocial, setNomeSocial] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [instagram, setInstagram] = useState('');
  const [gitHub, setGitHub] = useState('');
  const [facebook, setFacebook] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const emailPattern = /@neki-(it\.com\.br|com\.br)$/;
  const [errorMensagem, setErrorMensagem] = useState<{
    name?: string;
    message?: string;
  }>({});

  type MessageError = {
    name?: string;
    message?: string;
  };

  async function handleSelectPhoto() {
    setPhotoIsLoading(true);
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 1,
      });

      if (result.didCancel) {
        return;
      }
      console.log(result);

      if (result?.assets?.[0]?.uri || '../../assets/images/neki.png') {
        setUserPhoto(
          result?.assets?.[0]?.uri || '../../assets/images/neki.png',
        );
      }

      setUserPhoto(result?.assets?.[0] || '../../assets/images/neki.png');
    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsLoading(false);
    }
  }

  const erro = {
    noEmail: 'Por favor, coloque o e-mail',
    noNomeCompleto: 'Por favor, coloque seu nome completo',
    noData: 'Por favor, coloque a data',
    noFoto: 'Por favor, coloque a foto',
  };

  const errorMSG = (name: string) => {
    return (
      errorMensagem &&
      name === errorMensagem.name && (
        <FraseErro>{errorMensagem.message}</FraseErro>
      )
    );
  };

  const validateInput = (email: string) => {
    setErrorMensagem({});
    console.log(email);
    if (!email) {
      setErrorMensagem({name: 'noEmail', message: erro.noEmail});
      setTimeout(() => {
        setErrorMensagem({});
      }, 2500);
      return false;
    }
    if (!emailPattern.test(email)) {
      Alert.alert('O e-mail deve terminar com @neki-it ou @neki!');
      return;
    }
    if (!nomeCompleto) {
      setErrorMensagem({name: 'noNomeCompleto', message: erro.noNomeCompleto});
      setTimeout(() => {
        setErrorMensagem({});
      }, 2500);
      return false;
    }
    if (!userPhoto) {
      setErrorMensagem({name: 'noFoto', message: erro.noFoto});
      setTimeout(() => {
        setErrorMensagem({});
      }, 2500);
      return false;
    }
    if (!dataNascimento) {
      setErrorMensagem({name: 'noData', message: erro.noData});
      setTimeout(() => {
        setErrorMensagem({});
      }, 2500);
      return false;
    }
    return true;
  };

  const handleRegister = async () => {
    if (validateInput(email)) {
      const data = new FormData();
      console.log('foto', userPhoto);
      data.append('email', email);
      data.append('nome', nomeCompleto);
      data.append('dataDeNascimento', dataNascimento);
      data.append('imagem', {
        uri: userPhoto.uri,
        name: 'user_image.jpg',
        type: 'image/jpeg',
      }),
        data.append('nomeSocial', nomeSocial);
      data.append('telefone', telefone);
      data.append('instagram', instagram);
      data.append('gitHub', gitHub);
      data.append('linkedin', linkedin);
      data.append('facebook', facebook);
      try {
        const response = await cadastroColaborador(data);
        Alert.alert('Cadastro concluído');
        setTimeout(() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <VStack flex={1}>
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="#007260"
              endColor="#0b5045"
            />
          ) : (
            <LogoFoto
              source={userPhoto ? {uri: userPhoto.uri} : ImagemPadrao}
              alt="Foto usuario"
              size={PHOTO_SIZE}
              mb={3}
            />
          )}
          <HeaderIconAdm navigation={navigation} />
          <TouchableOpacity onPress={handleSelectPhoto}>
            <Text color="#007260" fontWeight="bold" fontSize="md" mt={2} mb={8}>
              Adicionar Foto
            </Text>
          </TouchableOpacity>
          {errorMSG('noEmail') && (
            <FraseErro>{errorMensagem.message}</FraseErro>
          )}
          {errorMSG('noNomeCompleto')}
          {errorMSG('noFoto')}
          {errorMSG('noData')}
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={texto => setEmail(texto)}
          />
          <Input
            placeholder="Nome Completo"
            keyboardType="default"
            value={nomeCompleto}
            onChangeText={texto => setNomeCompleto(texto)}
          />
          <Input
            placeholder="Nome Social"
            keyboardType="default"
            value={nomeSocial}
            onChangeText={texto => setNomeSocial(texto)}
          />
          <Input
            placeholder="Data de nascimento"
            keyboardType="default"
            value={dataNascimento}
            onChangeText={texto => setDataNascimento(texto)}
          />
          <Input
            placeholder="Telefone"
            keyboardType="numeric"
            value={telefone}
            onChangeText={texto => setTelefone(texto)}
          />
          <Input
            placeholder="Instagram"
            keyboardType="default"
            value={instagram}
            onChangeText={texto => setInstagram(texto)}
          />
          <Input
            placeholder="GitHub"
            keyboardType="default"
            value={gitHub}
            onChangeText={texto => setGitHub(texto)}
          />
          <Input
            placeholder="Linkedin"
            keyboardType="default"
            value={linkedin}
            onChangeText={texto => setLinkedin(texto)}
          />
          <Input
            placeholder="Facebook"
            keyboardType="default"
            value={facebook}
            onChangeText={texto => setFacebook(texto)}
          />
          <Button
            title="Cadastrar"
            w="290"
            borderColor="#007260"
            borderWidth={3}
            onPress={() => handleRegister()}
          />
        </Center>
      </ScrollView>
    </VStack>
  );
}
