import { Outlet } from "react-router-dom";
import { NavBar } from "../../components";
import { Container, Content } from "./styles";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Content>
          <Outlet />
        </Content>
      </Container>
    </>
  );
};

export default Layout;
