import { Title, Container, Input, Label, LogButton, LoginForm, ErrorContainer } from "./styles";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const Login = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [authtoken, setAuthToken] = useState(localStorage.getItem("authtoken") || "");

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
          navigate("/");
          setMessage("Usuario creado correctamente");
        } else {
          const data = await response.json();
          setMessage("No se puede iniciar sesion con estas credenciales");
        }
      } catch (error) {
        setMessage("Some error occured");
      }
    };
    authenticate();
  };

  return (
    <Container>
      <Title>¡Inicia sesión en Decide!</Title>
      {message && <ErrorContainer>{message}</ErrorContainer>}
      <LoginForm>
        <Label>
          Nombre de usuario:
          <Input type="text" name="Introduce tu nombre de usuario" placeholder="Nombre de usuario"
            value={username} onChange={(e) => setUsername(e.target.value)} />
        </Label>
        <Label>
          Contraseña:
          <Input type="password" name="Introduce tu contraseña" placeholder="Contraseña"
            value={password} onChange={(e) => setPassword(e.target.value)} />
        </Label>
        <LogButton onClick={handleAuth} className="btn-register">
          Iniciar sesion
        </LogButton>
      </LoginForm>
    </Container>
  );
};

export default Login;
