import { Title, Container, Input, Label, RegButton, RegisterForm } from "./styles";

const Signup = () => {
  
  return (
    <Container>
      <Title>¡Registrate en Decide!</Title>
      <RegisterForm>
        <Label>Nombre:
          <Input type="text" name="Introduce tu nombre" placeholder="Nombre" />
        </Label>
        <Label>Apellidos:
          <Input type="text" name="Introduce tus apellidos" placeholder="Apellidos" />
        </Label>
        <Label>Correo electronico:
          <Input type="email" name="Introduce tu correo electrónico" placeholder="Correo electrónico" />
        </Label>
        <Label>Contraseña:
          <Input type="password" name="Introduce tu contraseña" placeholder="Contraseña" />
        </Label>
        <Label>Repite la contraseña:
          <Input type="password" name="Repite tu contraseña" placeholder="Contraseña" />
        </Label>
        <RegButton className="btn-register">Registrarse</RegButton>
      </RegisterForm>
    </Container>
  )
}

export default Signup;

