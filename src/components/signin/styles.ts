import styled from "styled-components";

export const Title = styled.h1`
    font-size: 28px;
    color: #000000;
    font-weight: 800;
    margin: 3.33%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 8px;
    background-color: #d5d5d5;
    border-color: black;
    width: 100%;
    max-width: 600px;
    height: auto;
`;

export const ErrorContainer = styled.div`
    text-align: center;
    border-radius: 8px;
    background-color: #ff7373;
    border-color: black;
    width: 80%;
    height: auto;
    margin: auto;
`;

export const Input = styled.input`
    padding: 15px;
    margin: auto;
    display: flex;
    border-radius: 8px;
    background: #f1f1f1;
    color: #000000;
    width: 60%;
    outline: none;
    border: none;
    margin-bottom: 20px;
`;

export const Label = styled.label`
    color: #000000;
    font-size: medium;
`;

export const LogButton = styled.button`
    background-color: #00aaff;
    color: white;
    border: none;
    cursor: pointer;
    text-align: center;
    opacity: 0.9;
    border-radius: 8px;
    width: 60%;
    max-width: 600px;
    height: max-content;
    font-size: 1.2em;
    font-weight: 600;
    margin-top: 15px;
    margin-bottom: 20px;
    padding: 15px;
    cursor: pointer;
    &:hover {
    background-color: #4677d8;
    }
`;

export const LoginForm = styled.form``;