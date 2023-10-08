import React, {useState, useContext} from 'react';
import {Box, Image, Heading, Icon, Text, HStack, Center} from 'native-base';
import {dataProps} from '../../@types/type';
import IconPerfil from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ModalContent,
  ModalDialog,
  SocialIconsContainer,
  SocialIcon,
  SocialText,
  DeleteButton,
  UpdateButton,
} from './style';
import {Modal, View, Button, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../context/authContext';
import {Api, deleteColaborador} from '../../service/api';
import {TokenType} from '../../@types/auth';
import Input from '../Input';

interface CustomAlertProps {
  visible: boolean;
  onClose: () => void;
  message?: string;
}

export default function FeedCard({data}: dataProps) {
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const {isAuthenticated, token} = useContext(AuthContext);
  const [editData, setEditData] = useState({
    email : '',
    nome: '',
    nomeSocial : '',
    dataDeNascimento: '',
    telefone: '',
    instagram: '',
    gitHub: '',
    linkedin : '',
    facebook: ''
  })

  const renderDate = (date: string) => {
    const D = new Date(date);
    return `${D.getDate()}/${D.getMonth() + 1}/${D.getFullYear()}`;
  };

  const fetchDeleteColaborador = async (
    colaboradorId: number,
    token: TokenType
  ) => {
    const id = colaboradorId;
    console.log(colaboradorId);
    try {
      const response = await deleteColaborador(id, token);
      Api.defaults.headers.common['Authorization'] = `Bearer ${token.token}`;
  
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  function ModalDelete({visible, onClose, message}: CustomAlertProps) {
    return (
      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
        onRequestClose={onClose}>
        <ModalDialog>
          <ModalContent>
            <Text textAlign="center" fontSize={15} mb={5} fontWeight={800}>
              {' '}
              Tem certeza que deseja deletar?{' '}
            </Text>
            <DeleteButton
              onPress={() => fetchDeleteColaborador(data.colaboradorId, token)}>
              <Text textAlign="center" color="#fff" fontSize={20}>
                Deletar
              </Text>
            </DeleteButton>
            <Button title="Fechar" onPress={onClose} />
          </ModalContent>
        </ModalDialog>
      </Modal>
    );
  }

  function ModalEdit({visible, onClose, message}: CustomAlertProps) {
    return (
      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
        onRequestClose={onClose}>
        <ModalDialog>
        <Button title="Fechar" onPress={onClose} />
          <ModalContent>
            <Input placeholder="Email" keyboardType="email-address" value={editData.email}  onChangeText={(text) => handleEditChange('email', text)} />
            <Input placeholder="Nome completo" keyboardType="default" value={editData.nome}  onChangeText={(text) => handleEditChange('nome', text)}/>
            <Input placeholder="Nome social" keyboardType="default" value={editData.nomeSocial}  onChangeText={(text) => handleEditChange('nomeSocial', text)}/>
            <Input placeholder="Data de nascimento" keyboardType="numeric" value={editData.dataDeNascimento}  onChangeText={(text) => handleEditChange('dataDeNascimento', text)}/>
            <Input placeholder="Telefone" keyboardType="numeric" value={editData.telefone}  onChangeText={(text) => handleEditChange('telefone', text)}/>
            <Input placeholder="Instagram" keyboardType="default" value={editData.instagram}  onChangeText={(text) => handleEditChange('instagram', text)}/>
            <Input placeholder="GitHub" keyboardType="default" value={editData.gitHub}  onChangeText={(text) => handleEditChange('gitHub', text)}/>
            <Input placeholder="Linkedin" keyboardType="default" value={editData.linkedin}  onChangeText={(text) => handleEditChange('linkedin', text)}/>
            <Input placeholder="Facebook" keyboardType="default" value={editData.facebook}  onChangeText={(text) => handleEditChange('facebook', text)}/>
            <UpdateButton onPress={onClose} >
              <Text color="#fff" fontSize={20} >Atualizar</Text>
            </UpdateButton>
          </ModalContent>
          
        </ModalDialog>
      </Modal>
    );
  }

  function ModalSociais({visible, onClose, message}: CustomAlertProps) {
    return (
      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
        onRequestClose={onClose}>
        <ModalDialog>
          <ModalContent>
            <SocialIconsContainer>
              <SocialIcon>
                <Icon as={IconPerfil} name="instagram" size={6} color="black" />
              </SocialIcon>
              <SocialText>{data.instagram}</SocialText>
            </SocialIconsContainer>
            <SocialIconsContainer>
              <SocialIcon>
                <Icon as={IconPerfil} name="facebook" size={6} color="black" />
              </SocialIcon>
              <SocialText>{data.facebook}</SocialText>
            </SocialIconsContainer>
            <SocialIconsContainer>
              <SocialIcon>
                <Icon as={IconPerfil} name="linkedin" size={6} color="black" />
              </SocialIcon>
              <SocialText>{data.linkedin}</SocialText>
            </SocialIconsContainer>
            <SocialIconsContainer>
              <SocialIcon>
                <Icon as={IconPerfil} name="github" size={6} color="black" />
              </SocialIcon>
              <SocialText>{data.gitHub}</SocialText>
            </SocialIconsContainer>
            <Button title="Fechar" onPress={onClose} />
          </ModalContent>
        </ModalDialog>
      </Modal>
    );
  }

  const handlePress = () => {
    setShowAlert(true);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleOpenModalEdit = () => {
    setEditData({
      email: data.email || '', 
      nome: data.nome || '',
      nomeSocial: data.nomeSocial || '',
      dataDeNascimento: renderDate(data.dataDeNascimento) || '',
      telefone: data.telefone || '',
      instagram: data.instagram || '',
      gitHub: data.gitHub || '',
      linkedin: data.linkedin || '',
      facebook: data.facebook || '',
    })
    setModalEdit(true);
  };

  const handleEditChange = (fieldName: string, value : string) => {
    setEditData({
      ...editData,
      [fieldName] : value,
    })
  }

  return (
    <Box
      flex={1}
      flexDirection="column"
      mb={4}
      justifyContent="space-between"
      borderWidth={3}
      borderColor="#007260"
      bg="#fff"
      borderRadius={3}>
      <Box>
        <Image
          source={{uri: 'data:image/png;base64,' + data.imagem.dados}}
          alt="Feed foto"
          w="100%"
          h={280}
          alignSelf="center"
          resizeMode="cover"
        />
      </Box>
      <Box marginY={2}>
        <Center>
          <Heading fontSize={20} ml={2}>
            {data.nome}
          </Heading>
        </Center>
        <HStack>
          <Icon as={IconPerfil} name="calendar" size={6} color="black" ml={2} />
          <Text fontWeight={500}>{renderDate(data.dataDeNascimento)}</Text>
          <Icon as={IconPerfil} name="id-card" size={6} color="black" ml={5} />
          <Text fontWeight={500}> ID : {data.colaboradorId}</Text>
          <Text fontWeight={700} ml={2}>
            {data.nomeSocial}
          </Text>
        </HStack>
        <HStack>
          <Icon
            as={IconPerfil}
            name="email-outline"
            size={6}
            color="black"
            ml={2}
          />
          <Text fontWeight={800}>{data.email}</Text>
        </HStack>
        <HStack>
          {data.telefone ? (
            <>
              <Icon
                as={IconPerfil}
                name="cellphone"
                size={6}
                color="black"
                ml={2}
              />
              <Text fontWeight={500}>{data.telefone}</Text>
            </>
          ) : (
            <>
              <Icon
                as={IconPerfil}
                name="cellphone"
                size={6}
                color="black"
                ml={2}
              />
              <Text fontWeight={700}>Sem celular</Text>
            </>
          )}
          <Icon
            as={IconPerfil}
            name="account-circle-outline"
            size={6}
            color="black"
            ml={2}
          />
          <TouchableOpacity onPress={handlePress}>
            <ModalSociais
              visible={showAlert}
              onClose={() => setShowAlert(false)}
              message="Redes sociais"
            />
            <Text fontWeight={700} fontSize={15}>
              {' '}
              Redes sociais!
            </Text>
          </TouchableOpacity>
          {isAuthenticated ? (
            <>
              <TouchableOpacity onPress={handleOpenModal}>
                <Icon as={IconPerfil} name="delete-outline" size={6} ml={5} />
                <ModalDelete
                  visible={showModal}
                  onClose={() => setShowModal(false)}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleOpenModalEdit}>
                <Icon as={IconPerfil} name="pencil" size={6} ml={5} />
                <ModalEdit
                  visible={modalEdit}
                  onClose={() => setModalEdit(false)}
                />
              </TouchableOpacity>
            </>
          ) : null}
        </HStack>
      </Box>
    </Box>
  );
}
