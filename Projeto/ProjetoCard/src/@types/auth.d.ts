export interface AuthType {
    currentUserId: number;
    token : TokenType;
    login : (email: string, password: string) => void;  
}

export interface UserDataType {
    email : string;
    password : string;
}

export interface TokenType {
    token: string;
}

export interface ApiDataType {
    token? : TokenType;
    userData?: UserDataType;
}