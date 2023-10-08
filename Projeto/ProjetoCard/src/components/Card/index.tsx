import {
  Box,
  HStack,
  FlatList,
  View,
  Spinner,
  Heading
} from 'native-base';
import React, {useState, useEffect, useCallback} from 'react';
import Fotos from '../Colaboradores';
import FeedCard from '../FeedCard';
import {listaColaborador, listarImagem} from '../../service/api';
import { useFocusEffect } from '@react-navigation/native';

function CardHome() {
  const [colaborador, setColaborador] = useState([]);
  const [imagem, setImagem] = useState([]);
  const [cardIsLoading, setCardIsLoading] = useState(false);


   
    async function fetchLista() {
      setCardIsLoading(true)
      const response = await listaColaborador();
      setColaborador(response.data);
      setCardIsLoading(false)
    }


  useEffect(() => {
    async function fetchImagem() {
      const response = await listarImagem();
      setImagem(response.data);
    }
    fetchImagem();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchLista();
    }, [])
  )

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
