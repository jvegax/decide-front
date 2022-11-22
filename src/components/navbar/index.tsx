import React from 'react'
import { LinkContainer, NavBar as Nav, Title } from './styles';
const NavBar = () => {
  return (
    <Nav>
        <Title>Decide 🫵</Title>
        <LinkContainer>
            <a href="/">Votaciones</a>
            <a href="/signin">Login</a>
            <a href="/signup">Registrarme</a>
        </LinkContainer>
    </Nav>
  )
}

export default NavBar;