import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  border-radius: 18px;
  background-color: black;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  background-color: yellow;
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
    background-color: blue;
`;