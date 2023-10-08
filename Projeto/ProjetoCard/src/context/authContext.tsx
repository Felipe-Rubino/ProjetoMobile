import React,{useState, createContext, useEffect, useContext, ReactNode} from 'react'
import { AuthType, TokenType, UserDataType } from '../@types/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSession } from '../service/api'

export const AuthContext = createContext<AuthType>({} as AuthType)

type Props = {
    children : ReactNode;
}

export const AuthProvider: React.FC<Props> = ({children} : Props) => {
    const [token, setToken] = useState<TokenType>({} as TokenType)
    const [currentUserId, setCurrentUserId] = useState<number>(0)
    const context = useContext(AuthContext);

    
    
    useEffect(() => {
        async function checkToken() {
          const storedToken = await AsyncStorage.getItem('token');
          const loggedUserId = await AsyncStorage.getItem('loggedUserId');
    
          if (storedToken && loggedUserId) {
            setCurrentUserId(JSON.parse(loggedUserId));
            setToken({ token: storedToken });
          }
        }
        checkToken();
      }, []);


    const login = async (email: string, password: string) => {
        try {
          const response = await createSession(email, password);
    
          if (response.token) {
            AsyncStorage.setItem('token', response.token);
            setToken({ token: response.token });
          }
    
          if (response.loggedUserId) {
            AsyncStorage.setItem('loggedUserId', JSON.stringify(response.loggedUserId));
            setCurrentUserId(response.loggedUserId);
          }
        } catch (error) {
          console.log(error);
        }
      };


    return (
        <AuthContext.Provider value={{ token, currentUserId, login}}>
            {children}
        </AuthContext.Provider>
    )
}