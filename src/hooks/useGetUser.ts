import { useState } from "react";
import { User } from "../context/DecideProvider";

const useGetUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>("");
  const token = localStorage.getItem("authToken");
  console.log({ msg: "✅ From get user data", token });

  const handleUserData = async () => {
    const credentials = { token };
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    };

    const API_URL = "http://127.0.0.1:8000/authentication/getuser/";
    try {
      const response = await fetch(API_URL, reqOptions);
      if (response.ok) {
        const data = await response.json();
        const userFromApi = {
          id: data?.id || 0,
          username: data?.username || "",
          email: data?.email || "",
          name: data?.name || "",
          surname: data?.surname || "",
          is_staff: data?.is_staff || false,
        };
        localStorage.setItem("user", JSON.stringify(userFromApi));
        setUser(userFromApi);
      } else {
        const data = await response.json();
        setUser(null);
        console.log({ data });
      }
    } catch (error) {
      setError("❌ Some error occurred...");
      console.log({ error });
    }
  };
  handleUserData();
  return { user, error };
};

export default useGetUser;
