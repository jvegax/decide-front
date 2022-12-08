import React, { ReactNode, useEffect, useState } from "react";
import DecideContext from "./DecideContext";

interface DecideProviderProps {
  children: ReactNode;
}

export type User = {
  id: number;
  username: string;
  email: string;
  name: string;
  surname: string;
  is_staff: boolean;
};

const DecideProvider = (props: DecideProviderProps) => {
  const { children } = props;
  const [userName, setUserName] = useState<string>(
    localStorage.getItem("userName") || ""
  );
  const [authToken, setAuthToken] = useState<string>(
    localStorage.getItem("authToken") || ""
  );
  const [user, setUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("user") || "{}")
  );

  const handleLogin = (userName: string, authToken: string) => {
    setUserName(userName);
    setAuthToken(authToken);
  };

  const handleLogout = () => {
    setUserName("");
    setAuthToken("");
    localStorage.removeItem("userName");
    localStorage.removeItem("authToken");
  };

  const contextValue = {
    userName,
    authToken,
    user,
    handleLogin,
    handleLogout,
  };

  return (
    <DecideContext.Provider value={contextValue}>
      {children}
    </DecideContext.Provider>
  );
};

export default DecideProvider;
