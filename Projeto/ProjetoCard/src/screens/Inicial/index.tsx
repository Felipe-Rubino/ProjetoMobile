import React from 'react';
import {Text} from 'react-native';
import {
  Container,
  ContainerBotao,
  ContainerFoto,
  ContainerPrincipal,
  Conteudo,
  ImagemSecundaria,
  Imagens,
  QuartaImagem,
  TerceiraImagem,
  Titulo,
} from './styles';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '../../routes/app.routes';

function Inicial() {

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleHome(){
    navigation.navigate('Home')
  }

  return (
    <Container>
      <ContainerPrincipal>
        <ContainerFoto>
          <Imagens source={require('../../assets/images/Foto1.png')} />
          <ImagemSecundaria source={require('../../assets/images/Foto2.jpg')} />
          <TerceiraImagem source={require('../../assets/images/Foto3.jpg')} />
          <QuartaImagem source={require('../../assets/images/Foto4.png')} />
          <Conteudo>
            <Titulo>Bem vindo!!</Titulo>
          </Conteudo>
        </ContainerFoto>
      </ContainerPrincipal>
        <ContainerBotao>
            <Button title="Acessar" onPress={handleHome} />
        </ContainerBotao>
    </Container>
  );
}

export default Inicial;
