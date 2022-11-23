import { useMemo } from "react";

const useLogin = () => {
    const credentials = {
        username: "your-name",
        password: "your-password",
    };

    const reqOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
    };
    const API_URL = "http://127.0.0.1:8000/authentication/login/";
    const authenticate = async () => {
        try {
            const response = await fetch(API_URL, reqOptions);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const token = useMemo(() => authenticate(), []);
    return { token };

    
    
};

export default useLogin;