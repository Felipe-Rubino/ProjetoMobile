import {
  Box,
  HStack,
  FlatList,
  View,
  Spinner,
  Heading
} from 'native-base';
import React, {useState, useEffect} from 'react';
import Fotos from '../Colaboradores';
import FeedCard from '../FeedCard';
import {listaColaborador, listarImagem} from '../../service/api';

function CardHome() {
  const [colaborador, setColaborador] = useState([]);
  const [imagem, setImagem] = useState([]);
  const [cardIsLoading, setCardIsLoading] = useState(false);

  useEffect(() => {
    setCardIsLoading(true)
    async function fetchLista() {
      const response = await listaColaborador();
      setColaborador(response.data);
      setCardIsLoading(false)
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
        {cardIsLoading ? (
          <HStack flex={1}  justifyContent='center' alignItems='center' >
            <Spinner size="lg"/>
          </HStack>
        ): (
          <FlatList
          data={colaborador}
          renderItem={({item}) => <FeedCard data={item} />}
          showsVerticalScrollIndicator={false}
        />
        )}
        
      </View>
    </>
  );
}

export default CardHome;
