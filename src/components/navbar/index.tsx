import { LinkContainer, NavBar as Nav, NavLink, Title } from './styles';
const NavBar = () => {
  return (
    <Nav>
        <Title>Decide 🫵</Title>
        <LinkContainer>
            <NavLink to="/">Votaciones</NavLink>
            <NavLink to='signin/'>Iniciar sesion</NavLink>
            <NavLink to="signup/">Registro</NavLink>
        </LinkContainer>
    </Nav>
  )
}

export default NavBar;