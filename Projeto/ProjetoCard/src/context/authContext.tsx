import React,{useState, createContext, useEffect, useContext, ReactNode} from 'react'
import { AuthType, TokenType, UserDataType } from '../@types/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSession } from '../service/api'

export const AuthContext = createContext<AuthType>({} as AuthType)

type Props = {
    children : ReactNode;
}

export const AuthProvider: React.FC<Props> = ({children} : Props) => {
    const [token, setToken] = useState<TokenType>({ token: '' });
    const [currentUserId, setCurrentUserId] = useState<number>(0)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const context = useContext(AuthContext);

    const logout = () => {
        AsyncStorage.removeItem('token')
        setToken({ token: null });
        setIsAuthenticated(false)
    }


    return (
        <AuthContext.Provider value={{ token, currentUserId, isAuthenticated, setToken, setCurrentUserId, setIsAuthenticated, logout}}>
            {children}
        </AuthContext.Provider>
    )
}