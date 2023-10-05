import React from 'react'
import { Input as NativeBaseInput, IInputProps} from 'native-base'

function Input( {...rest} : IInputProps) {
    return (
        <NativeBaseInput 
            bg='gray.200'
            h={12}
            px={4}
            borderWidth={0}
            fontSize="md"
            color="black"
            fontFamily="body"
            mb={4}
            {...rest}
        />
    )
    
}


export default Input