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

const Login = () => {
  const { t } = useTranslation();
  const enter_your_username_tras = t("enter_your_username").toString();
  const username_tras = t("username").toString();
  const password_tras = t("password").toString();
  const enter_your_password_tras = t("enter_your_password").toString();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = useDecide();
  const navigate = useNavigate();

  const onPressLogin = (e: any) => {
    e.preventDefault();
    const { user } = handleLogin(username, password);
    if (user) {
      navigate("/");
    }
    
  };

  return (
    <Container>
      <Title>{t("log_in_to_decide")}</Title>
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
