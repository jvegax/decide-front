import { Title, Container, Input, Label, LogButton, LoginForm } from "./styles";

const Signin = () => {

  return (
    <Container>
      <Title>¡Inicia sesión en Decide!</Title>
      <LoginForm>
        <Label>Correo electronico:
          <Input type="email" name="Introduce tu correo electrónico" />
        </Label>
        <Label>Contraseña:
          <Input type="password" name="Introduce tu contraseña" />
        </Label>
        <LogButton className="btn-register">Iniciar sesion</LogButton>
      </LoginForm>
    </Container>
  )
}

export default Signin;

