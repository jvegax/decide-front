import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  border-radius: 9px;
  background-color: #36393d;
  padding: 20px;
  margin-top: 8px;
  border: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover ${Button} {
    background-color: #151618;
  }
`;

export const Label = styled.p`
  font-size: 16px;
  font-weight: 600;
`;
export const Value = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
