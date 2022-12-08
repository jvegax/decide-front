import { createContext } from "react";
import { User } from "../models/User";

interface DecideContextProps {
  user: User | null;
  token: string | null;
  handleLogin: (username: string, password: string) => void;
  handleLogout: () => void;
}

const DecideContext = createContext<DecideContextProps>({
  user: null,
  token: null,
  handleLogin: () => {},
  handleLogout: () => {},
});

export default DecideContext;
