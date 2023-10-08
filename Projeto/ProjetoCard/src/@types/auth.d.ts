export interface AuthType {
  currentUserId: number;
  setCurrentUserId: React.Dispatch<React.SetStateAction<number>>;
  token: TokenType;
  setToken: React.Dispatch<React.SetStateAction<TokenType>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UserDataType {
  email: string;
  password: string;
}

export interface TokenType {
  token : string;
}

export interface ApiDataType {
  token?: TokenType;
  currentUserId?: UserDataType;
}
