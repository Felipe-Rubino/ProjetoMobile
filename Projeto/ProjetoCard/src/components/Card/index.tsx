import { Box, HStack, Pressable, Icon, FlatList} from 'native-base'
import React, { useState, useEffect } from 'react'
import Fotos from '../Colaboradores';
import FeedCard from '../FeedCard';
import { listaColaborador } from '../../service/api';

// const data = [
//     {
//         id: 1,
//         nome: "Felipe dos santos rubino",
//         nomeSocial : "Felipe",
//         Email: "FelipeRubino60@gmail.com",
//         dataNascimento: "16/02/2004",
//         telefone: "981773517",
//         avatarUrl: "https://images.pexels.com/photos/6210320/pexels-photo-6210320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     },
//     {
//         id: 2,
//         nome: "Claudia junior da rocha ",
//         nomeSocial : "Claudia",
//         Email: "claudia60@gmail.com",
//         dataNascimento: "16/02/2001",
//         telefone: "981553517",
//         avatarUrl: "https://images.pexels.com/photos/4909321/pexels-photo-4909321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     },
//     {
//         id: 3,
//         nome: "Claudia junior da rocha ",
//         nomeSocial : "Claudia",
//         Email: "claudia60@gmail.com",
//         dataNascimento: "16/02/2001",
//         telefone: "981553517",
//         avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     },
//     {
//         id: 4,
//         nome: "Claudia junior da rocha ",
//         nomeSocial : "Claudia",
//         Email: "claudia60@gmail.com",
//         dataNascimento: "16/02/2001",
//         telefone: "981553517",
//         avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     }
// ]

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