import { createContext } from 'react';

interface DecideContextProps {
  // Add any properties that you want to include in the context here
  authToken: string;
  handleLogin: (userName: string, authToken: string) => void;
  handleLogout: () => void;
}

const DecideContext = createContext<DecideContextProps>({
  // Add any default values here
  authToken: localStorage.getItem('authToken') || '',
  handleLogin: () => {},
  handleLogout: () => {},
});

export default DecideContext;