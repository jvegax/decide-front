import { createContext } from "react";
import { User } from "../models/User";

interface DecideContextProps {
  user: User | null;
  token: string | null;
  message: string;
  handleLogin: (username: string, password: string) => { user: User | null };
  handleLogout: () => void;
  message: string;
}

const DecideContext = createContext<DecideContextProps>({
  user: null,
  token: null,
  message: '',
  handleLogin: () => ({ user: null }),
  handleLogout: () => {},
  message: '',
});

export default DecideContext;
