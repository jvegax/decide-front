import { Title, Container, Input, Label, LogButton, LoginForm, ErrorContainer } from "./styles";
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import useLogin from "../../hooks/useLogin";

const Login = () => {

  const { token } = useLogin();

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // 👇️ redirect to /home
    navigate('/');
  };


  return (
    <Container>
      <Title>¡Inicia sesión en Decide!</Title>
      <LoginForm onSubmit={handleSubmit}>
        <Label>Nombre de usuario:
          <Input type="text" name="Introduce tu nombre de usuario" placeholder="Nombre de usuario"/>
        </Label>
        <Label>Contraseña:
          <Input type="password" name="Introduce tu contraseña" placeholder="Contraseña" />
        </Label>
        <LogButton className="btn-register" type="submit">Iniciar sesion</LogButton>
      </LoginForm>
    </Container>
  )
}

export default Login;

