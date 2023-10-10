export interface AuthType {
  currentUserId: number;
  setCurrentUserId: React.Dispatch<React.SetStateAction<number>>;
  token: TokenType;
  setToken: React.Dispatch<React.SetStateAction<TokenType>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  logout : () => void;
}
export interface UserDataType {
  email: string;
  password: string;
}
export interface TokenType {
  token : string | null;
}
export interface ApiDataType {
  token?: TokenType;
  currentUserId?: UserDataType;
}
