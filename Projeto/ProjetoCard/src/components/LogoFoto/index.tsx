import { Image, IImageProps } from "native-base";
import React from 'react'

type Props = IImageProps & {
    size : number;

}

export function LogoFoto( {size, ...rest } : Props ) {
    return (
        <Image
        w={size}
        h={size}
        rounded="full"
        borderWidth={2}
        borderColor="gray.400"
        {...rest }
        />
    )
}