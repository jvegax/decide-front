import styled from "styled-components";


export const Button = styled.button`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  height: 65px;
  flex-direction: column;
  border-radius: 9px;
  background-color: #36393d;
  padding: 20px;
  margin-top: 8px;
  border: none;
  cursor: pointer;
`;

export const Container = styled.div`
  &:hover ${Button} {
    background-color: #151618;
  }
`;
export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`;

export const Description = styled.p`
  background-color: red;
  color: #000;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
