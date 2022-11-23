import { Title, Container, Input, Label, LogButton, LoginForm, ErrorContainer } from "./styles";
import {useTranslation} from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const email = t('email').toString();
  const password = t('password').toString();
  const enter_your_email = t('enter_your_email').toString();
  const enter_password = t('enter_password').toString();

    return (
    <Container>
      <Title>{t('log_in_to_decide')}</Title>
      <LoginForm>
        <Label>{email}
          <Input type="email" name={enter_your_email} placeholder={email} />
        </Label>
        <Label>{password}
          <Input type="password" name={enter_password} placeholder={password} />
        </Label>
        <LogButton className="btn-register">{t('login')}</LogButton>
      </LoginForm>
    </Container>
  )
}

export default Login;

