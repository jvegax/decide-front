import styled from "styled-components";

export const Title = styled.h1`
    font-size: 28px;
    color: #fff;
    font-weight: 600;
    line-height: 1.2;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 8px;
    background-color: #36393d;
    border-color: black;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
`;

export const ErrorContainer = styled.div`
    text-align: center;
    border-radius: 8px;
    background-color: #ff7373;
    border-color: black;
    width: 100%;
`;

export const LogButton = styled.button`
    background-color: #00aaff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    width: 100%;
    max-width: 200px;
    font-size: 1.2em;
    font-weight: 600;
    margin-top: 16px;
    padding: 15px;
    cursor: pointer;
    &:hover {
    background-color: #4677d8;
    }
`;