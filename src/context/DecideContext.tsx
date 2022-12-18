import { createContext } from "react";
import { User } from "../models/User";

interface DecideContextProps {
  user: User | null;
  token: string | null;
  message: string;
  userLoading: boolean;
  handleSetUser: (user: User) => void;
  handleSetToken: (token : string) => void;
  handleLogout: () => void;
}

const DecideContext = createContext<DecideContextProps>({
  user: null,
  token: null,
  message: '',
  userLoading: false,
  handleSetUser: () => {},
  handleSetToken: () => {},
  handleLogout: () => {},
});

export default DecideContext;
