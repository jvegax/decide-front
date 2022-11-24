import { Title, Container, Input, Label, RegButton, RegisterForm, ErrorContainer } from "./styles";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState("");
  const [authtoken, setAuthToken] = useState("");

  const handleAuthReg = async (e: any) => {
    e.preventDefault();

    const credentials = { username, email, password };
    const reqOptions = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    };

    const API_URL = "http://127.0.0.1:8000/authentication/register/";
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
        } else if (password!=password2){
          const data = await response.json();
          setMessage("Las contraseñas no coinciden");
        } else {
          const data = await response.json();
          setMessage(data.non_field_errors[0]);
        }
      } catch (error) {
        setMessage("Registro aún en desarrollo, disculpe las molestias");
      }
    };
    authenticate();
  };

  {/* Formulario actual y visual, por el momento es lo unico que podemos hacer que funcione*/ }
  
  return (
    <Container>
      <Title>¡Registrate en Decide!</Title>
      <ErrorContainer>{message ? <p>{message}</p> : null}</ErrorContainer>
      <RegisterForm onSubmit={handleAuthReg}>
        <Label>
          Nombre de usuario:
          <Input type="text" name="Introduce tu nombre de usuario" placeholder="Nombre de usuario"
            value={username} onChange={(e) => setUsername(e.target.value)} />
        </Label>
        <Label>Correo electronico:
          <Input type="email" name="Introduce tu correo electrónico" placeholder="Correo electrónico"
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </Label>
        <Label>
          Contraseña:
          <Input type="password" name="Introduce tu contraseña" placeholder="Contraseña"
            value={password} onChange={(e) => setPassword(e.target.value)} />
        </Label>
        <Label>
          Contraseña:
          <Input type="password" name="Repite tu contraseña" placeholder="Contraseña"
            value={password2} onChange={(e) => setPassword2(e.target.value)} />
        </Label>
        <RegButton className="btn-register" onClick={handleAuthReg}>Registrarse</RegButton>
      </RegisterForm>
    </Container>
  )
}

export default Register;

