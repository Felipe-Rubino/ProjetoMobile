import { Box, HStack, Pressable, Icon, FlatList} from 'native-base'
import React, { useState, useEffect } from 'react'
import Fotos from '../Colaboradores';
import FeedCard from '../FeedCard';
import { listaColaborador } from '../../service/api';

function CardHome() {

    const [colaborador, setColaborador] = useState([])

    useEffect(() => {
        
        async function fetchLista(){
            const response = await listaColaborador();
            setColaborador(response.data)
            console.log(response)
        }
        fetchLista();
    }, [])

    return(
    <Box flex={1} bg='#f8f8f8' flexDirection='column'>
        <Box paddingX={4}>
            {/* <FlatList
                horizontal={true}
                data={data}
                renderItem={ ({ item }) => <Fotos data={item} />}
                showsHorizontalScrollIndicator={false}
                
            /> */}
        </Box>
        <Box paddingX={4}>
            <FlatList
                data={colaborador}
                renderItem={ ({ item }) => <FeedCard data={item} /> }
                showsVerticalScrollIndicator={false}
            />
        </Box>
    </Box>
    )
    
}

export default CardHome;