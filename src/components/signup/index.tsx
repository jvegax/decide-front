import { Title, Container, Input, Label, RegButton, RegisterForm, ErrorContainer } from "./styles";

import { useState } from "react";
import {useTranslation} from "react-i18next";

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
  {/* Se puede cambiar el idioma de la página y se traducirá el formulario, aquí algunas constantes
  para los placeholders*/ }
  const { t } = useTranslation();
  const name_tras = t('name').toString();
  const enter_your_name_tras = t('enter_your_name').toString();
  const surname_tras = t('surname').toString();
  const enter_your_surname_tras = t('enter_your_surname').toString();
  const password_tras = t('password').toString();
  const enter_password_tras = t('enter_password').toString();
  const confirm_password_tras = t('confirm_password').toString();
  const enter_your_password_again_tras = t('enter_password_again').toString();
  const enter_your_email_tras = t('enter_your_email').toString();
  const email_tras = t('email').toString();
  return (
    <Container>
      <Title>{t('register_to_decide')}</Title>
      <ErrorContainer>{message ? <p>{message}</p> : null}</ErrorContainer>
      <RegisterForm onSubmit={handleSubmit}>
        <Label>{name_tras}:
          <Input type="text" value={firstname} name={enter_your_name_tras} placeholder={name_tras} onChange={(e) => setFirstname(e.target.value)} />
        </Label>
        <Label>Apellidos:
          <Input type="text" value={lastname} name={enter_your_surname_tras} placeholder={surname_tras} onChange={(e) => setLastname(e.target.value)} />
        </Label>
        <Label>Correo electronico:
          <Input type="email" value={email} name={enter_your_email_tras} placeholder={email_tras} onChange={(e) => setEmail(e.target.value)} />
        </Label>
        <Label>Contraseña:
          <Input type={password_tras} value={password} name={enter_password_tras} placeholder={password_tras} onChange={(e) => setPassword(e.target.value)} />
        </Label>
        <Label>Repite la contraseña:
          <Input type="password" value={password2} name={enter_your_password_again_tras} placeholder={confirm_password_tras} onChange={(e) => setPassword2(e.target.value)} />
        </Label>
        <RegButton className="btn-register" type="submit">Registrarse</RegButton>
      </RegisterForm>
    </Container>
  )
}

export default Register;

