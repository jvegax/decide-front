import React from 'react'
import { Link } from 'react-router-dom';
import { LinkContainer, NavBar as Nav, Title } from './styles';
const NavBar = () => {
  return (
    <Nav>
        <Title>Decide 🫵</Title>
        <LinkContainer>
            <Link to="/">Votaciones</Link>
            <Link to='signin/'>Iniciar sesion</Link>
            <Link to="signup/">Registro</Link>
        </LinkContainer>
    </Nav>
  )
}

export default NavBar;