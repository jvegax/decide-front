import { Title, Container, Input, Label, RegButton, RegisterForm } from "./styles";

const Signin = () => {
  
  return (
    <Container>
      <Title>¡Registrate en Decide!</Title>
      <RegisterForm>
        <Label>Nombre:
          <Input type="text" name="Introduce tu nombre"/>
        </Label>
        <Label>Apellidos:
          <Input type="text" name="Introduce tus apellidos"/>
        </Label>
        <Label>Correo electronico:
          <Input type="email" name="Introduce tu correo electrónico"/>
        </Label>
        <Label>Contraseña:
          <Input type="password" name="Introduce tu contraseña"/>
        </Label>
        <Label>Repite la contraseña:
          <Input type="password" name="Repite tu contraseña"/>
        </Label>
        <RegButton className="btn-register">Registrarse</RegButton>
      </RegisterForm>
    </Container>
  )
}

export default Signin;

