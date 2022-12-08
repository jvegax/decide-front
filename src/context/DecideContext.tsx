import { createContext } from 'react';

interface DecideContextProps {
  // Add any properties that you want to include in the context here
  authToken: string;
  setAuthToken: (token: string) => void;
}

const DecideContext = createContext<DecideContextProps>({
  // Set default values for any properties here
  authToken: '',
  setAuthToken: () => {},
});

export default DecideContext;