import useDecide from "../../hooks/useDecide";
import useGetUser from "../../hooks/useGetUser";
import { Button, Container, Label, Value } from "./styles";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <Container>
        <h1>Perfil</h1>
      <Button>
        {user.name && (
          <div>
            <Label>Name</Label>
            <Value>{user.name}</Value>
          </div>
        )}
        {user.username && (
          <div>
            <Label>Username</Label>
            <Value>{user.username}</Value>
          </div>
        )}
        {user.name && (
          <div>
            <Label>Name</Label>
            <Value>{user.name}</Value>
          </div>
        )}
      </Button>
    </Container>
  );
};

export default Profile;
