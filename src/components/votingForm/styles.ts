import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
  margin-top: 18px;
  width: 100%;
`;

export const MainTitle = styled.p`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  color:  #36393d;
`;
export const Paragraph = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  color: #fff;
`;

export const VotingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding: 2em;
  border-radius: 8px;
  width: 100%;
  max-width: 450px;
  background-color: #36393d;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
`;

export const LabelContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  gap: 0.5em;
  width: 100%;
  max-width: 300px;
  color: #fff;
`;

export const Input = styled.input`
  padding: 0.5em 1em;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  font-size: 1.2rem;
  width: 100%;
  background-color: #fff;
  color: #000;
`;

export const NewOption = styled.button`
  padding: 0em 1em;
  border-radius: 5px;
  width: 100%;
  border: none;
  font-weight: 600;
  font-size: 2rem;
  background-color: #5f8de8;
  &:hover {
    background-color: #4677d8;
  }
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  padding: 0.5em 1em;
  border-radius: 8px;
  margin-top: 0.5em;
  width: 100%;
  max-width: 450px;
  border: none;
  font-weight: 600;
  font-size: 1.8rem;
  background-color: #5f8de8;
  &:hover {
    background-color: #4677d8;
  }
  cursor: pointer;
`;
