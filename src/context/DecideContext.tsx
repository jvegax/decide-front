import { createContext } from "react";
import { User } from "./DecideProvider";

interface DecideContextProps {
  user: User | null;
  handleLogin: (username: string, password: string) => void;
  handleLogout: () => void;
}

const DecideContext = createContext<DecideContextProps>({
  user: null,
  handleLogin: () => {},
  handleLogout: () => {},
});

export default DecideContext;
