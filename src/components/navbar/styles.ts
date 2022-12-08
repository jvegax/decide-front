import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  height: 80px;
  border-bottom: 1px solid #eee;
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
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Button = styled.button`
    padding: 0.5em 1em;
    margin: 0.2em;
    border-radius: 5px;
    border: none;
    font-weight: 600;
    cursor: pointer;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CreateVotingLink = styled(Link)`
  text-decoration: none;
  color: #000;
  padding: 9px;
  border-radius: 5px;
  background-color: #eee;
`;

export const SelectLang = styled.select`
  padding: 0.5em;
  margin: 0.2em;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.2rem;
  background-color: #e2e2e2;
`;