import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #f5f5f5;
`;

export const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    background-color: blue;
`;

export const Content = styled.div`
    width: 100%;
    height: 100vh;

    padding: 20px;
    background-color: yellow;
`;

export const Footer = styled.input.attrs({
    type: "text",
})``;