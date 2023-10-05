import { Box, Image } from 'native-base'
import React from 'react'
import { dataProps } from '../../@types/type'


export default function Fotos( { data } : dataProps ) {
    return (
        <Box flex={1} ml={2}>
            <Image
                source={{uri : "data:image/png;base64," + data.imagem.dados}}
                width={16}
                height={16}
                borderRadius={32}
                alt="Foto dos colaboradores"
                borderColor='#007260'
                borderWidth={2}
                mt={2}

            />
        </Box>
    )
}