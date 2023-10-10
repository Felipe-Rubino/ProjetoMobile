import React, {useState, useContext} from 'react';
import {Box, Image, Heading, Icon, Text, HStack, Center} from 'native-base';
import {FeedCardProps} from '../../@types/type';
import IconPerfil from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ModalContent,
  ModalDialog,
  SocialIconsContainer,
  SocialIcon,
  SocialText,
  DeleteButton,
} from './style';
import {Modal, Button, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../context/authContext';

interface CustomAlertProps {
  visible: boolean;
  onClose?: () => void;
  message?: string;
}

export default function FeedCard({
  data,
  onDelete,
  setEditData,
  setModalEdit,
}: FeedCardProps) {
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const {isAuthenticated, token} = useContext(AuthContext);

  const handleOpenModalEdit = () => {
    setEditData({
      colaboradorId: data.colaboradorId,
      email: data.email || '',
      nome: data.nome || '',
      nomeSocial: data.nomeSocial || '',
      dataDeNascimento: data.dataDeNascimento || '',
      telefone: data.telefone || '',
      instagram: data.instagram || '',
      gitHub: data.gitHub || '',
      linkedin: data.linkedin || '',
      facebook: data.facebook || '',
    });
    setModalEdit(true);
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
              onPress={async () => {
                await onDelete(data.colaboradorId, token);
                setShowModal(false);
              }}>
              <Text textAlign="center" color="#fff" fontSize={20}>
                Deletar
              </Text>
            </DeleteButton>
            <Button title='Fechar' onPress={onClose} />
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
          <Text fontWeight={800}>{data.dataDeNascimento}</Text>
          <Icon as={IconPerfil} name="id-card" size={6} color="black" ml={5} />
          <Text fontWeight={800}> ID : {data.colaboradorId}</Text>
          <Text fontWeight={800} ml={2}>
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
              <Text fontWeight={800}>{data.telefone}</Text>
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
              </TouchableOpacity>
            </>
          ) : null}
        </HStack>
      </Box>
    </Box>
  );
}
