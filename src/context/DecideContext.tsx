import { createContext } from "react";
import { User } from "../models/User";

interface DecideContextProps {
  user: User | null;
  token: string | null;
  handleLogin: (username: string, password: string) => void;
  handleLogout: () => void;
  message: string;
}

const DecideContext = createContext<DecideContextProps>({
  user: null,
  token: null,
  handleLogin: () => {},
  handleLogout: () => {},
  message: '',
});

export default DecideContext;
