import { Title, Container, Input, Label, RegButton, RegisterForm, ErrorContainer } from "./styles";
import { useState } from "react";
import { Link, Routes, Route, useNavigate } from 'react-router-dom';

const Register = () => {

  {/* Parte referente a la funcionalidad con la API,
      cuando esté terminada la funcionalidad en el Backend
      se terminará y probara a utilizarlo con la API */ }
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
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
          username: username,
          email: email,
          password: password,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setUsername("");
        setEmail("");
        setPassword("");
        setPassword2("");
        setMessage("User created successfully");
        navigate('/');
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
        <Label>Nombre de usuario:
          <Input type="text" value={username} name="Introduce tu nombre de usuario" placeholder="Nombre de usuario" onChange={(e) => setUsername(e.target.value)} />
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

