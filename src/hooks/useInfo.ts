import { useMemo } from "react";

const useInfo = () => {
    const parameters = {
        token: "token",
    };

    const Options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parameters),
    };

    const API_URL_USER = "http://127.0.0.1:8000/authentication/getuser/";
    const info = async () => {
        try {
            const user_response = await fetch(API_URL_USER, Options);
            const user_data = await user_response.json();
            return user_data;
        } catch (error) {
            console.log(error);
        }
    }

    const user_info = useMemo(() => info(), []);
    return { user_info };

}

export default useInfo;