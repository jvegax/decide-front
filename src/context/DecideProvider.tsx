import React, { ReactNode, useState } from 'react';
import DecideContext from './DecideContext';

interface DecideProviderProps {
  children: ReactNode;
  // Add any props for the provider here
}

const DecideProvider = (props: DecideProviderProps) => {
  const { children } = props;
  const [userName, setUserName] = useState<string>('');
  const [authToken, setAuthToken] = useState<string>('');
  // Set the values for the context here
  const contextValue = {
    userName,
    setUserName,
    authToken,
    setAuthToken,
  };

  return (
    <DecideContext.Provider value={contextValue}>
      {children}
    </DecideContext.Provider>
  );
};

export default DecideProvider;
