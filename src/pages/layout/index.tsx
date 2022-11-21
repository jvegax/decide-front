import { Outlet, Link } from "react-router-dom";
import { Container, Content, NavBar } from "./styles";

const Layout = () => {
  return (
    <Container>
      <NavBar>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
      </NavBar>

      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;
