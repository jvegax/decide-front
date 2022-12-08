import useDecide from "../../hooks/useDecide";
import { Button, Container, DataContainer, Label, Value } from "./styles";

const Profile = () => {
  const { user } = useDecide();

  return (
    <Container>
      <h1>Perfil</h1>
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
