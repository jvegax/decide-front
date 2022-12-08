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
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useDecide from "../../hooks/useDecide";

const Login = () => {
  const { t } = useTranslation();
  const user_created_successfully_tras = t(
    "user_created_successfully"
  ).toString();
  const some_error_occurred_tras = t("some_error_occurred").toString();
  const cant_login_tras = t("cant_login").toString();
  const enter_your_username_tras = t("enter_your_username").toString();
  const username_tras = t("username").toString();
  const password_tras = t("password").toString();
  const enter_your_password_tras = t("enter_your_password").toString();

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const { setAuthToken, authToken } = useDecide();

  const handleAuth = async (e: any) => {
    e.preventDefault();

    const credentials = { username, password };
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    };

    const API_URL = "http://127.0.0.1:8000/authentication/login/";
    const authenticate = async () => {
      try {
        const response = await fetch(API_URL, reqOptions);
        // check if response is ok
        if (response.ok) {
          const data = await response.json();
          console.log(data.token);
          setAuthToken(data.token);
          localStorage.setItem("authtoken", data.token);
          navigate("/");
          setMessage(user_created_successfully_tras);
        } else {
          const data = await response.json();
          setMessage(cant_login_tras);
        }
      } catch (error) {
        setMessage(some_error_occurred_tras);
      }
    };
    authenticate();
  };

  return (
    <Container>
      <Title>{t("log_in_to_decide")}</Title>
      {message && <ErrorContainer>{message}</ErrorContainer>}
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
        <LogButton onClick={handleAuth} className="btn-register">
          {t("login")}
        </LogButton>
      </LoginForm>
    </Container>
  );
};

export default Login;
