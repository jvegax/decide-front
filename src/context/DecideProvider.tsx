import React, { ReactNode, useEffect, useState } from 'react';
import DecideContext from './DecideContext';

interface DecideProviderProps {
  children: ReactNode;
}

const DecideProvider = (props: DecideProviderProps) => {
  const { children } = props;
  const [userName, setUserName] = useState<string>(localStorage.getItem('userName') || '');
  const [authToken, setAuthToken] = useState<string>(localStorage.getItem('authToken') || '');
  
  const handleLogin = (userName: string, authToken: string) => {
    setUserName(userName);
    setAuthToken(authToken);
  };

  const handleLogout = () => {
    setUserName('');
    setAuthToken('');
    localStorage.removeItem('userName');
    localStorage.removeItem('authToken');
  };

  const contextValue = {
    userName,
    authToken,
    handleLogin,
    handleLogout,
  };

  return (
    <DecideContext.Provider value={contextValue}>
      {children}
    </DecideContext.Provider>
  );
};

export default DecideProvider;
