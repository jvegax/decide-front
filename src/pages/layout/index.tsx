import { Outlet } from "react-router-dom";
import { NavBar } from "../../components";
import { Container, Content } from "./styles";

const Layout = () => {
  return (
    <Container>
      <NavBar />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;
