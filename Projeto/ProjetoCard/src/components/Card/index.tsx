import {
  Box,
  HStack,
  Pressable,
  Icon,
  FlatList,
  ScrollView,
  View,
} from 'native-base';
import React, {useState, useEffect} from 'react';
import Fotos from '../Colaboradores';
import FeedCard from '../FeedCard';
import {listaColaborador, listarImagem} from '../../service/api';

function CardHome() {
  const [colaborador, setColaborador] = useState([]);
  const [imagem, setImagem] = useState([]);

  useEffect(() => {
    async function fetchLista() {
      const response = await listaColaborador();
      setColaborador(response.data);
    }
    fetchLista();
  }, []);

  useEffect(() => {
    async function fetchImagem() {
      const response = await listarImagem();
      setImagem(response.data);
    }
    fetchImagem();
  }, []);

  return (
    <>
      <Box bg="#fff" flexDirection="column">
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
        <FlatList
          data={colaborador}
          renderItem={({item}) => <FeedCard data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
}

export default CardHome;
