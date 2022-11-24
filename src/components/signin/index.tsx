import { Title, Container, Input, Label, LogButton, LoginForm, ErrorContainer } from "./styles";
import {useTranslation} from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const email_tras = t('email').toString();
  const password_tras = t('password').toString();
  const enter_your_email_tras = t('enter_your_email').toString();
  const enter_password_tras = t('enter_password').toString();

    return (
    <Container>
      <Title>{t('log_in_to_decide')}</Title>
      <LoginForm>
        <Label>{email_tras}
          <Input type="email" name={enter_your_email_tras} placeholder={email_tras} />
        </Label>
        <Label>{password_tras}
          <Input type="password" name={enter_password_tras} placeholder={password_tras} />
        </Label>
        <LogButton className="btn-register">{t('login')}</LogButton>
      </LoginForm>
    </Container>
  )
}

export default Login;

