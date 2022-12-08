import React, { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DecideContext from "./DecideContext";

interface DecideProviderProps {
  children: ReactNode;
}

export type User = {
  id: number;
  auth_token: string;
  username: string;
  email: string;
  name: string;
  surname: string;
  is_staff: boolean;
};

const normalizeUser = (user: any, token: string | null): User => {
  return {
    id: user?.id || 0,
    auth_token: token ?? "",
    username: user?.username || "",
    email: user?.email || "",
    name: user?.name || "",
    surname: user?.surname || "",
    is_staff: user?.is_staff || false,
  };
};

const DecideProvider = (props: DecideProviderProps) => {
  const { children } = props;
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token") || null
  );
  const [loadingToken, setLoadingToken] = useState<boolean>(false);

  const handleLogin = (username: string, password: string) => {
    const API_URL = "http://127.0.0.1:8000/authentication/login/";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    };

    // 1 - Get user auth token to verify login
    const getToken = async () => {
      console.log("✅ getToken");
      try {
        setLoadingToken(true);
        const response = await fetch(API_URL, options);
        if (response.ok) {
          const data = await response.json();
          setToken(data.token);
          localStorage.setItem("token", data.token);
          console.log("🚀 Token ready: ", data.token);
          return data.token;
        }
        setLoadingToken(false);
      } catch (error) {
        console.log({ error });
      }
    };

    // 2 - Get user data
    const getUser = async () => {
      console.log("✅ getUser");
      const token = await getToken();
      const data = {
        token: token,
      };
      const API_URL = "http://127.0.0.1:8000/authentication/getuser/";
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      try {
        const response = await fetch(API_URL, options);
        if (response.ok) {
          const data = await response.json();
          const user = normalizeUser(data, token);
          setUser(user);
          console.log("🚀 User ready: ", user);
        }
      } catch (error) {
        console.log({ error });
      }
    };
    getUser();
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
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
