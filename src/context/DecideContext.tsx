import { createContext } from "react";
import { User } from "./DecideProvider";

interface DecideContextProps {
  userName: string;
  authToken: string;
  user: User | null;
  handleLogin: (userName: string, authToken: string) => void;
  handleLogout: () => void;
}

const DecideContext = createContext<DecideContextProps>({
  userName: localStorage.getItem("userName") || "",
  authToken: localStorage.getItem("authToken") || "",
  user: JSON.parse(localStorage.getItem("user") || "{}"),
  handleLogin: () => {},
  handleLogout: () => {},
});

export default DecideContext;
