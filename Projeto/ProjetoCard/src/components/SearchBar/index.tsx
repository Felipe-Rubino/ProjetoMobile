import React,{useState} from "react";
import IconPerfil from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon, Input, VStack } from "native-base";

interface SearchBarProps {
    onSearch: (text: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {

    const [searchTerm, setSearchTerm] = useState("");

     const handleSearch = (text : string) => {
        setSearchTerm(text);
        onSearch(text); 
    };
    
    return (
        <VStack  w='100%' space={5} alignSelf='center'>
            <Input placeholder="Search" fontSize={15} onChangeText={handleSearch}  value={searchTerm} variant="filled" width="100%"  borderRadius="10" py="3" px="2" bg='#fff' InputLeftElement={<Icon ml="2" size="7"  as={<IconPerfil name="account-search" />} />} />
        </VStack>
    )
}