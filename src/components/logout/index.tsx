import { Title, Container, LogButton } from "./styles";
import { useNavigate } from "react-router-dom";
import useDecide from "../../hooks/useDecide";

const Logout = () => {
  const { handleLogout } = useDecide();
  const navigate = useNavigate();

  const handleAuth = async (e: any) => {
    e.preventDefault();

    const credentials = { token: localStorage.getItem("authtoken") };
    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    };

    const API_URL = "http://127.0.0.1:8000/authentication/logout/";
    const logout = async () => {
      await fetch(API_URL, reqOptions);
      handleLogout();
      navigate("/");
    };
    logout();
  };

  return (
    <Container>
      <Title>¿Seguro que quieres salir de decide?</Title>
      <LogButton onClick={handleAuth} className="btn-register">
        {" "}
        Salir{" "}
      </LogButton>
    </Container>
  );
};

export default Logout;
