import React from 'react'
import { Box, Image, Heading, Text, Icon, HStack } from 'native-base'
import { dataProps } from '../../@types/type'
import IconPerfil from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FeedCard( { data } : dataProps ) {

    const renderDate = (date : String)  => {
       const formattedDate = format(new Date(date), 'dd/MM/yyyy');  
       return formattedDate
    }

    return(
        <Box flex={1} flexDirection="column" mb={4} bg="#fff" justifyContent='space-between'   padding={2} borderRadius={4}>
            <Box>
                <Image
                    source={{ uri: "data:image/png;base64," + data.imagem.dados}}
                    alt="Feed foto"
                    w="100%"
                    h={180}
                    alignSelf='center'
                    resizeMode='cover'
                />
            </Box>
            <Box marginY={3}>
                <HStack>
                    <Heading size="sm" mr={5}>{data.nome}</Heading>
                    <Icon
                        as={IconPerfil}
                        name="calendar"
                        size={5}
                        color="black"
                    />
                    <Text fontWeight={800}>{renderDate(data.dataDeNascimento)}</Text>
                    <Icon   
                        as={IconPerfil}
                        name='id-card'
                        size={5}
                        color="black"
                        ml={5}
                    />
                    <Text fontWeight={800}> ID : {data.colaboradorId}</Text>
                </HStack>
                <Text fontWeight={800} >{data.nomeSocial}</Text>
                <HStack>
                <Icon
                    as={IconPerfil}
                    name="email-outline"
                    size={5}
                    color="black"
                />
                <Text fontWeight={800}>{data.email}</Text>
                <Icon
                    as={IconPerfil}
                    name="cellphone"
                    size={5}
                    color="black"
                />
                <Text fontWeight={800}>{data.telefone}</Text>
                </HStack>
            </Box>
        </Box>
    )
}