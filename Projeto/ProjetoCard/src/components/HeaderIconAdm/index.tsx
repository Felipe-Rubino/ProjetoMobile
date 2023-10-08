import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native';
import { IPageProps } from '../../@types/navigation';
import { Icon } from 'native-base';
import IconPerfil from 'react-native-vector-icons/MaterialCommunityIcons';
import { ButtonLogin } from './style';

function HeaderIconAdm({navigation} : IPageProps)  {

    function handleLoginAdm() {
        navigation.navigate('Login')
    }

    return (
        <ButtonLogin>
            <TouchableOpacity onPress={handleLoginAdm}>
            <Icon as={IconPerfil} name="account-wrench-outline" size={9} color="black" />
            </TouchableOpacity>
        </ButtonLogin>
    )
}



export default HeaderIconAdm;