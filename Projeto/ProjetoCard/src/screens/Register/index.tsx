import React, {useState} from 'react';
import Input from '../../components/Input';
import {Center, ScrollView, VStack, Skeleton, Text} from 'native-base';
import {LogoFoto} from '../../components/LogoFoto';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { TouchableOpacity } from 'react-native';
import Button from '../../components/Button';

const PHOTO_SIZE = 180;

export function Register() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto ] = useState('../../assets/images/neki.png');

//   async function handleSelectPhoto(){
//     const result = await launchImageLibrary({
//         mediaType : 'photo',
//         quality: 1
//     });

//     if (result.didCancel) {
//         return;
//     }
    
//     setUserPhoto(result.uri)
//   }

  return (
    <VStack flex={1} >
      <ScrollView>
        <Center mt={6} px={10} >
          {photoIsLoading ? 
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="#007260"
            />
           : 
            <LogoFoto
              source={require('../../assets/images/neki.png')}
              alt="Foto usuario"
              size={PHOTO_SIZE}
              mb={3}
            />
          }
           <TouchableOpacity>
                <Text color="#007260" fontWeight="bold" fontSize="md" mt={2} mb={8}> 
                    Adicionar Foto
                </Text>
           </TouchableOpacity>
           <Input placeholder='E-mail'/>
           <Input placeholder='Nome Completo'/>
           <Input placeholder='Nome Social'/>
           <Input />
        </Center>
      </ScrollView>
    </VStack>
  );
}
