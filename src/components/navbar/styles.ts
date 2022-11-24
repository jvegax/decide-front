import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 80px;
  border-bottom: 1px solid #eee;
  background-color: #f5f5f5;
`;

export const Title = styled.h1`
  margin-right: 15px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 1em;
`;

export const Button = styled.button`
    padding: 0.5em 1em;
    margin: 0.2em;
    border-radius: 5px;
    border: none;
    font-weight: 600;
    cursor: pointer;
`;
