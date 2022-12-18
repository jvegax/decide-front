import { ReactNode, useState } from "react";
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

  const handleLogin = (username: string, password: string) => {
    const API_URL = "http://127.0.0.1:8000/authentication/login/";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    };

    // 1 - Get user auth token to verify login
    const getToken = async () => {
      try {
        const response = await fetch(API_URL, options);
        if (response.ok) {
          const data = await response.json();
          setToken(data.token);
          localStorage.setItem("token", data.token);
          return data.token;
        } else if (response.status === 400) {
          setMessage("No se puede iniciar sesión con estas credenciales");
        }
      } catch (error) {
        console.log({ error });
        setMessage("No se puede iniciar sesión con estas credenciales");
      }
    };

    // 2 - Get user data
    const getUser = async () => {
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
          console.log({ data });
          const user = normalizeUser(data, token);
          setUser(user);
          setMessage("");
          localStorage.setItem("user", JSON.stringify(user));
          return user;
        }
      } catch (error) {
        console.log({ error });
      }
    };
    getUser();
    return { user };
  };

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
    handleLogin,
    handleLogout,
    message,
  };

  return (
    <DecideContext.Provider value={contextValue}>
      {children}
    </DecideContext.Provider>
  );
};

export default DecideProvider;
