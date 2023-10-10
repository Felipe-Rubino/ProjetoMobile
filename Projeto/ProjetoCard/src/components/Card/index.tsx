import {Box, HStack, FlatList, View, Spinner, Input, Text} from 'native-base';
import React, {useState, useEffect, useContext} from 'react';
import Fotos from '../Colaboradores';
import FeedCard from '../FeedCard';
import {
  Api,
  deleteColaborador,
  listaColaborador,
  listarImagem,
  atualizarColaborador,
} from '../../service/api';
import {SearchBar} from '../SearchBar';
import {imagem} from '../../@types/type';
import {TokenType} from '../../@types/auth';
import {ModalContent, ModalDialog, UpdateButton} from './style';
import {Modal, Button} from 'react-native';
import {AuthContext} from '../../context/authContext';

interface Colaborador {
  colaboradorId: number;
  nome: string;
  nomeSocial: string;
  email: string;
  dataDeNascimento: string;
  telefone: string;
  imagem: imagem;
  dados?: imagem;
  instagram?: string;
  gitHub?: string;
  linkedin?: string;
  facebook?: string;
}

interface CustomAlertProps {
  visible: boolean;
  onClose?: () => void;
  message?: string;
  editData: Colaborador;
}

function CardHome() {
  const [colaborador, setColaborador] = useState<Colaborador[]>([]);
  const [imagem, setImagem] = useState([]);
  const [cardIsLoading, setCardIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalEdit, setModalEdit] = useState(false);
  const {isAuthenticated, token} = useContext(AuthContext);
  const [editData, setEditData] = useState({
    colaboradorId: 0,
    email: '',
    nome: '',
    nomeSocial: '',
    imagem: {imagemId: 0, dados: ''},
    dataDeNascimento: '',
    telefone: '',
    instagram: '',
    gitHub: '',
    linkedin: '',
    facebook: '',
  });

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  async function fetchLista() {
    setCardIsLoading(true);
    const response = await listaColaborador();
    
    setColaborador(response.data);
    console.log(response.data)
    setCardIsLoading(false);
  }
  const filteredData = colaborador.filter(item =>
    item.nome.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    async function fetchImagem() {
      const response = await listarImagem();
      setImagem(response.data);
    }
    fetchImagem();
    fetchLista();
  }, []);

  const fetchDeleteColaborador = async (
    colaboradorId: number,
    token: TokenType,
  ) => {
    const id = colaboradorId;

    try {
      const response = await deleteColaborador(id, token);
      Api.defaults.headers.common['Authorization'] = `Bearer ${token.token}`;
      setColaborador(colaborador.filter(c => c.colaboradorId !== id));
    } catch (error) {
      console.log(error);
    }
  };
  
  const fetchUpdateColaborador = async (
    colaboradorId: number,
    token: TokenType,
    data: Colaborador,
  ) => {
    try {
      const response = await atualizarColaborador(colaboradorId, token, data)
      fetchLista();
      Api.defaults.headers.common['Authorization'] = `Bearer ${token.token}`;
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditChange = (fieldName: string, value: string) => {
    setEditData({
      ...editData,
      [fieldName]: value,
    });
  };

  function ModalEdit({visible, onClose, editData}: CustomAlertProps) {
    return (
      <Modal
        visible={visible}
        transparent={true}
        animationType="none"
        onRequestClose={onClose}
        >
        //input bugado demorando mas funciona
        <ModalDialog style={{ maxHeight: 550 }}>
          <Button title="Fechar" onPress={onClose} />
          <ModalContent>
            <Input
              placeholder="Email"
              keyboardType="email-address"
              value={editData.email}
              onChangeText={text => handleEditChange('email', text)}
              borderColor="#007260"
              color="#007260" 
              fontSize={16}
            />
            <Input
              placeholder="Nome completo"
              keyboardType="default"
              value={editData.nome}
              onChangeText={text => handleEditChange('nome', text)}
              borderColor="#007260"
              color="#007260" 
              fontSize={16}
            />
            <Input
              placeholder="Nome social"
              keyboardType="default"
              value={editData.nomeSocial}
              onChangeText={text => handleEditChange('nomeSocial', text)}
              borderColor="#007260"
              color="#007260" 
              fontSize={16}
            />
            <Input
              placeholder="Data de nascimento"
              keyboardType="default"
              value={editData.dataDeNascimento}
              onChangeText={text => handleEditChange('dataDeNascimento', text)}
              borderColor="#007260"
              color="#007260" 
              fontSize={16}
            />
            <Input
              placeholder="Telefone"
              keyboardType="numeric"
              value={editData.telefone}
              onChangeText={text => handleEditChange('telefone', text)}
              borderColor="#007260"
              color="#007260" 
              fontSize={16}
            />
            <Input
              placeholder="Instagram"
              keyboardType="default"
              value={editData.instagram}
              onChangeText={text => handleEditChange('instagram', text)}
              borderColor="#007260"
              color="#007260" 
              fontSize={16}
            />
            <Input
              placeholder="GitHub"
              keyboardType="default"
              value={editData.gitHub}
              onChangeText={text => handleEditChange('gitHub', text)}
              borderColor="#007260"
              color="#007260" 
              fontSize={16}
            />
            <Input
              placeholder="Linkedin"
              keyboardType="default"
              value={editData.linkedin}
              onChangeText={text => handleEditChange('linkedin', text)}
              borderColor="#007260"
              color="#007260" 
              fontSize={16}
            />
            <Input
              placeholder="Facebook"
              keyboardType="default"
              value={editData.facebook}
              onChangeText={text => handleEditChange('facebook', text)}
              borderColor="#007260"
              color="#007260" 
              fontSize={16}
            />
            <UpdateButton
              onPress={() =>
                fetchUpdateColaborador(editData.colaboradorId, token, editData)
              }>
              <Text color="#fff" fontSize={20}>
                Atualizar
              </Text>
            </UpdateButton>
          </ModalContent>
        </ModalDialog>
      </Modal>
    );
  }

  return (
    <>
      <ModalEdit
        visible={modalEdit}
        onClose={() => setModalEdit(false)}
        editData={editData}
      />
      <Box bg="#fff" flexDirection="column">
        <SearchBar onSearch={text => handleSearch(text)} />
        <Box>
          <FlatList
            horizontal={true}
            data={imagem}
            renderItem={({item}) => <Fotos data={item} />}
            showsHorizontalScrollIndicator={false}
          />
        </Box>
      </Box>
      <View style={{flex: 1, padding: 10}}>
        {cardIsLoading ? (
          <HStack flex={1} justifyContent="center" alignItems="center">
            <Spinner size="lg" />
          </HStack>
        ) : (
          <FlatList
            data={filteredData}
            keyboardShouldPersistTaps="handled"
            renderItem={({item}) => (
              <FeedCard
              
                data={item}
                onDelete={fetchDeleteColaborador}
                setEditData={setEditData}
                setModalEdit={setModalEdit}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </>
  );
}

export default CardHome;
