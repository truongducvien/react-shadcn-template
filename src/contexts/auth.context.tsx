import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

interface Props {
  children?: ReactNode;
}

export interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

const initialValues: IAuthContext = {
  isAuthenticated: true,
  setIsAuthenticated: () => {},
};

export const AuthContext = createContext<IAuthContext>(initialValues);

const AuthProvider = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialValues.isAuthenticated);
  const contextValue: IAuthContext = {
    isAuthenticated,
    setIsAuthenticated,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
