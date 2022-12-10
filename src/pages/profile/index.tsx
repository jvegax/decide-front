import TelegramIcon from "../../components/icons/TelegramIcon";
import useDecide from "../../hooks/useDecide";
import {
  Button,
  Container,
  DataContainer,
  Label,
  TelegramButton,
  Value,
} from "./styles";

const Profile = () => {
  const { user } = useDecide();

  const handleTelegramChannel = () => {
    const telegramUrl = "https://t.me/+seqiuW01_aVmOWNk";
    window.open(telegramUrl, "_blank");
  };

  return (
    <Container>
      <h1>Perfil</h1>
      <TelegramButton onClick={handleTelegramChannel}>
        <TelegramIcon />
      </TelegramButton>
      <Button>
        {user?.name && (
          <DataContainer>
            <Label>Name</Label>
            <Value>{user?.name}</Value>
          </DataContainer>
        )}
        {user?.surname && (
          <DataContainer>
            <Label>Surname</Label>
            <Value>{user?.surname}</Value>
          </DataContainer>
        )}
        {user?.username && (
          <DataContainer>
            <Label>Username</Label>
            <Value>{user?.username}</Value>
          </DataContainer>
        )}
        {user?.email && (
          <DataContainer>
            <Label>Email</Label>
            <Value>{user?.email}</Value>
          </DataContainer>
        )}
        <DataContainer>
          <Label>Decide Staff (role)</Label>
          <Value>{user?.is_staff ? "Si" : "No"}</Value>
        </DataContainer>
      </Button>
    </Container>
  );
};

export default Profile;
