import { Title, Container, Input, Label, RegButton, RegisterForm, ErrorContainer } from "./styles";

import { useState } from "react";

const Register = () => {

  {/* Parte referente a la funcionalidad con la API,
      cuando esté terminada la funcionalidad en el Backend
      se terminará y probara a utilizarlo con la API */ }

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setPassword2("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  {/* Formulario actual y visual, por el momento es lo unico que podemos hacer que funcione*/ }
  
  return (
    <Container>
      <Title>¡Registrate en Decide!</Title>
      <ErrorContainer>{message ? <p>{message}</p> : null}</ErrorContainer>
      <RegisterForm onSubmit={handleSubmit}>
        <Label>Nombre:
          <Input type="text" value={firstname} name="Introduce tu nombre" placeholder="Nombre" onChange={(e) => setFirstname(e.target.value)} />
        </Label>
        <Label>Apellidos:
          <Input type="text" value={lastname} name="Introduce tus apellidos" placeholder="Apellidos" onChange={(e) => setLastname(e.target.value)} />
        </Label>
        <Label>Correo electronico:
          <Input type="email" value={email} name="Introduce tu correo electrónico" placeholder="Correo electrónico" onChange={(e) => setEmail(e.target.value)} />
        </Label>
        <Label>Contraseña:
          <Input type="password" value={password} name="Introduce tu contraseña" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
        </Label>
        <Label>Repite la contraseña:
          <Input type="password" value={password2} name="Repite tu contraseña" placeholder="Contraseña" onChange={(e) => setPassword2(e.target.value)} />
        </Label>
        <RegButton className="btn-register" type="submit">Registrarse</RegButton>
      </RegisterForm>
    </Container>
  )
}

export default Register;

