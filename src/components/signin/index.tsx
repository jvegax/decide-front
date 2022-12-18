import {
  Title,
  Container,
  Input,
  Label,
  LogButton,
  LoginForm,
  ErrorContainer,
} from "./styles";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import useDecide from "../../hooks/useDecide";
import { redirect, useNavigate } from "react-router-dom";
import { normalizeUser } from "../../models/User";

const Login = () => {
  const { t } = useTranslation();
  const enter_your_username_tras = t("enter_your_username").toString();
  const username_tras = t("username").toString();
  const password_tras = t("password").toString();
  const enter_your_password_tras = t("enter_your_password").toString();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleSetUser, handleSetToken } = useDecide();
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>("");
  const [userLoading, setUserLoading] = useState<boolean>(true);

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
          handleSetToken(data.token);
          localStorage.setItem("token", data.token);
          return data.token;
        } else {
          setUserLoading(false);
          setMessage("No se puede iniciar sesión con estas credenciales");
        }
      } catch (error) {
        console.log({ error });
        setUserLoading(false);
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
          handleSetUser(user);
          setMessage("");
          localStorage.setItem("user", JSON.stringify(user));
        } else {
          setMessage("No se puede iniciar sesión con estas credenciales");
        }
        setUserLoading(false);
      } catch (error) {
        setUserLoading(false);
        setMessage("No se puede iniciar sesión con estas credenciales");
      }
    };
    getUser();
  };

  const onPressLogin = (e: any) => {
    e.preventDefault();
    handleLogin(username, password);
    if (!userLoading && !!message) {
      navigate("/");
    } else {
      setMessage(message)
    }
  };

  return (
    <Container>
      <Title>{t("log_in_to_decide")}</Title>
      {!!message && <ErrorContainer>{message}</ErrorContainer>}
      <LoginForm>
        <Label>
          {username_tras}:
          <Input
            type="text"
            name={enter_your_username_tras}
            placeholder={username_tras}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Label>
        <Label>
          {password_tras}:
          <Input
            type="password"
            name={enter_your_password_tras}
            placeholder={password_tras}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>
        <LogButton onClick={onPressLogin} className="btn-register">
          {t("login")}
        </LogButton>
      </LoginForm>
    </Container>
  );
};

export default Login;
