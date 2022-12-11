import { createContext } from "react";
import { User } from "../models/User";

interface DecideContextProps {
  user: User | null;
  token: string | null;
  handleLogin: (username: string, password: string) => void;
  handleStart:(action: string, token: string) => void;
  handleLogout: () => void;
}

const DecideContext = createContext<DecideContextProps>({
  user: null,
  token: null,
  handleLogin: () => {},
  handleLogout: () => {},
  handleStart: () => {},
});

export default DecideContext;
