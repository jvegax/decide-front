import { Button, Container, DataContainer, Label, Value } from "./styles";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <Container>
      <h1>Perfil</h1>
      <Button>
        {user.name && (
          <DataContainer>
            <Label>Name</Label>
            <Value>{user.name}</Value>
          </DataContainer>
        )}
        {user.username && (
          <DataContainer>
            <Label>Username</Label>
            <Value>{user.username}</Value>
          </DataContainer>
        )}
        {user.email && (
          <DataContainer>
            <Label>Email</Label>
            <Value>{user.email}</Value>
          </DataContainer>
        )}
      </Button>
    </Container>
  );
};

export default Profile;
