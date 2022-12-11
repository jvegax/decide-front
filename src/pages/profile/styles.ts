import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  border-radius: 9px;
  background-color: #36393d;
  padding: 20px;
  margin-top: 8px;
  border: none;
`;

export const TelegramButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  max-width: 300px;
  background-color: #87CEEB;
  border-radius: 9px;
  padding: 20px;
  margin-top: 8px;
  border: none;
  &:hover {
    background-color: #00BFFF;
  }

`;

export const TelegramTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #000000;
  

`;

export const DataContainer = styled.div`
  margin-bottom: 20px;
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
  font-size: 22px;
  font-weight: 600;
`;
export const Value = styled.p`
  font-size: 18px;
  font-weight: 400;
`;
