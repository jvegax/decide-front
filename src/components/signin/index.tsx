import { Title, Container, Input, Label, LogButton, LoginForm, ErrorContainer } from "./styles";

const Login = () => {

  return (
    <Container>
      <Title>¡Inicia sesión en Decide!</Title>
      <LoginForm>
        <Label>Correo electronico:
          <Input type="email" name="Introduce tu correo electrónico" placeholder="Correo electrónico"/>
        </Label>
        <Label>Contraseña:
          <Input type="password" name="Introduce tu contraseña" placeholder="Contraseña" />
        </Label>
        <LogButton className="btn-register">Iniciar sesion</LogButton>
      </LoginForm>
    </Container>
  )
}

export default Login;

