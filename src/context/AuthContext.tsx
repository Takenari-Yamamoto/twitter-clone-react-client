import React, { createContext, useState } from 'react';
import { UserInfo } from '../api/useAuth';

type Props = {
  children: React.ReactNode;
};

type InitialState = {
  userAuth: UserInfo | null;
  setUserAuth: React.Dispatch<React.SetStateAction<UserInfo | null>>;
};

export const AuthContext = createContext<InitialState | null>(null);

export const AuthProvider: React.VFC<Props> = ({ children }) => {
  const [userAuth, setUserAuth] = useState<UserInfo | null>(null);
  return (
    <AuthContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
