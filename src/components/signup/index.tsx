import { Title, Container, Input, Label, RegButton, RegisterForm, ErrorContainer } from "./styles";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Register = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState("");
  const [authtoken, setAuthToken] = useState("");

  const { t } = useTranslation();
  const user_created_successfully_tras = t('user_created_successfully').toString();
  const some_error_occurred_tras = t('some_error_occurred').toString();
  const passwords_dont_match_tras = t('passwords_dont_match').toString();

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
          setMessage(user_created_successfully_tras);
        } else if (password!=password2){
          const data = await response.json();
          setMessage(passwords_dont_match_tras);
        } else {
          const data = await response.json();
          setMessage(data.non_field_errors[0]);
        }
      } catch (error) {
        setMessage(some_error_occurred_tras);
      }
    };
    authenticate();
  };

  {/* Formulario actual y visual, por el momento es lo unico que podemos hacer que funcione*/ }
  {/* Se puede cambiar el idioma de la página y se traducirá el formulario, aquí algunas constantes
  para los placeholders*/ }
  const username_tras = t('username').toString();
  const enter_your_username_tras = t('enter_your_username').toString();
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
      <RegisterForm onSubmit={handleAuthReg}>
        <Label>
          {username_tras}:
          <Input type="text" name={enter_your_username_tras} placeholder={username_tras}
            value={username} onChange={(e) => setUsername(e.target.value)} />
        </Label>
        <Label>{email_tras}:
          <Input type="email" name={enter_your_email_tras} placeholder={email_tras}
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </Label>
        <Label>
          {password_tras}:
          <Input type="password" name={enter_password_tras} placeholder={password_tras}
            value={password} onChange={(e) => setPassword(e.target.value)} />
        </Label>
        <Label>
          {confirm_password_tras}:
          <Input type="password" name={enter_your_password_again_tras} placeholder={confirm_password_tras}
            value={password2} onChange={(e) => setPassword2(e.target.value)} />
        </Label>
        <RegButton className="btn-register" onClick={handleAuthReg}>{t('register')}</RegButton>
      </RegisterForm>
    </Container>
  )
}

export default Register;

