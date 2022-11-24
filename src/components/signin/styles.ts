import styled from "styled-components";

export const Title = styled.h1`
    font-size: 2em;
    color: #fff;
    font-weight: 800;
    margin-bottom: 1em;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-radius: 8px;
    background-color: #36393d;
    border-color: black;
    width: 100%;
    max-width: 600px;
    padding: 20px;
`;

export const ErrorContainer = styled.div`
    text-align: center;
    border-radius: 8px;
    background-color: #ff7373;
    border-color: black;
    width: 100%;
    max-width: 350px;
    margin-bottom: 1em;
    margin: auto;
`;

export const Input = styled.input`
    padding: 15px;
    margin: auto;
    display: flex;
    border-radius: 8px;
    background: #f1f1f1;
    color: #000;
    font-weight: 400;
    width: 100%;
    max-width: 350px;
    outline: none;
    border: none;
    margin-bottom: 20px;
`;

export const Label = styled.label`
    color: #fff;
    font-weight: 800;
    font-size: 1.2em;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 350px;
  height: 65px;
  border-radius: 9px;
  background-color: #5f8de8;
  padding: 20px;
  margin-top: 8px;
  margin: auto;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #4677d8;
  }
  font-size: 1.2em;
  font-weight: 600;
`;

export const LoginForm = styled.form``;