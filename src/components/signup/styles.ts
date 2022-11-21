import styled from "styled-components";

export const LoginForm = styled.form``;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #ffffff;
    width: 400px;
    height: auto;
`;

export const Title = styled.h1`
    font-size: 28px;
    color: #000000;
    font-weight: 800;
`;

export const Input = styled.input.attrs(props => ({
    type: props.type,
    placeholder: props.name,
}))`
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
    background-color: #00cc3d;
    color: white;
    border: none;
    cursor: pointer;
    text-align: center;
    opacity: 0.9;
    border-radius: 8px;
    width: max-content;
    height: max-content;
    font-weight: 600;
    margin-top: 15px;
    margin-bottom: 20px;
`;