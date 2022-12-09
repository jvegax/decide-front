import { Title, Container, LogButton } from "./styles";
import { useNavigate } from "react-router-dom";
import useDecide from "../../hooks/useDecide";

const Logout = () => {
  const { handleLogout } = useDecide();
  const navigate = useNavigate();
  
  const onPressLogout = () => {
    handleLogout();
    navigate("/");
  };
  return (
    <Container>
      <Title>¿Seguro que quieres salir de decide?</Title>
      <LogButton onClick={onPressLogout} className="btn-register">
        Salir
      </LogButton>
    </Container>
  );
};

export default Logout;
