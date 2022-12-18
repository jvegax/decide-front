import { ReactNode, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { normalizeUser, User } from "../models/User";
import DecideContext from "./DecideContext";

interface DecideProviderProps {
  children: ReactNode;
}

const DecideProvider = (props: DecideProviderProps) => {
  const { children } = props;
  const [user, setUser] = useState<User | null>(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "")
      : null
  );
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token") || null
  );

  const [message, setMessage] = useState<string>("");

  const [userLoading, setUserLoading] = useState<boolean>(false);

  const handleSetUser = (user: User) => {
    setUser(user);
  }

  const handleSetToken = (token: string) => {
    setToken(token);
  }

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    const API_URL = "http://127.0.0.1:8000/authentication/logout/";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    const logout = async () => {
      try {
        const response = await fetch(API_URL, options);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
        }
      } catch (error) {
        console.log({ error });
      }
    };
    logout();
  };

  const contextValue = {
    user,
    token,
    handleSetUser,
    handleSetToken,
    handleLogout,
    message,
    userLoading,
  };

  return (
    <DecideContext.Provider value={contextValue}>
      {children}
    </DecideContext.Provider>
  );
};

export default DecideProvider;
