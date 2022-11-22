import React from 'react'
import { LinkContainer, NavBar as Nav, Title } from './styles';
const NavBar = () => {
  return (
    <Nav>
        <Title>Decide 🫵</Title>
        <LinkContainer>
            <a href="/">Votaciones</a>
            <a href="signin/">Inicio de sesión</a>
            <a href="signup/">Registro</a>
        </LinkContainer>
    </Nav>
  )
}

export default NavBar;