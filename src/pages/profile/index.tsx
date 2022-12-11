import { useTranslation } from "react-i18next";
import TelegramIcon from "../../components/icons/TelegramIcon";
import useDecide from "../../hooks/useDecide";
import {
  Button,
  Container,
  DataContainer,
  Label,
  TelegramButton,
  Value,
  TelegramTitle,
} from "./styles";

const Profile = () => {
  const { user } = useDecide();
  const { t } = useTranslation();


  const handleTelegramChannel = () => {
    const telegramUrl = "https://t.me/+seqiuW01_aVmOWNk";
    window.open(telegramUrl, "_blank");
  };

  const handleTelegramBot = () => {
    const telegramUrl = "https://t.me/Decidesupportbot";
    window.open(telegramUrl, "_blank");
  };
  return (
    <>
       <Container>
      <h1>{t("profile")}</h1>
      
      <Button>
        {user?.name && (
          <DataContainer>
            <Label>{t("name")}</Label>
            <Value>{user?.name}</Value>
          </DataContainer>
        )}
        {user?.surname && (
          <DataContainer>
            <Label>{t("surname")}</Label>
            <Value>{user?.surname}</Value>
          </DataContainer>
        )}
        {user?.username && (
          <DataContainer>
            <Label>{t("username")}</Label>
            <Value>{user?.username}</Value>
          </DataContainer>
        )}
        {user?.email && (
          <DataContainer>
            <Label>{t("email")}</Label>
            <Value>{user?.email}</Value>
          </DataContainer>
        )}
        <DataContainer>
          <Label>{t("decide_role")}</Label>
          <Value>{user?.is_staff ? t("yes_role") : t("no_role")}</Value>
        </DataContainer>
      </Button>
    </Container>

      <TelegramButton onClick={handleTelegramChannel}>
        <TelegramIcon />
        <TelegramTitle>
        {t("telegram_channel")}
        </TelegramTitle>

      </TelegramButton>

      <TelegramButton onClick={handleTelegramBot}>
        <TelegramIcon />
        <TelegramTitle>
          Decide bot
        </TelegramTitle>

      </TelegramButton>
      
    
    </>
  );
};

export default Profile;
