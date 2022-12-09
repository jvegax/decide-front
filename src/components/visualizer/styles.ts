import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  color: #fff;
  border-radius: 9px;
  gap: 1em;
  background-color: #36393d;
`;

export const Title = styled.h1`
  font-size: 1.8em;
  line-height: 1.2em;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 9px;
  background-color: #151618;
  margin-top: 8px;
  cursor: pointer;
  width: 100%;
  border: none;
  font-size: 1.2em;
  font-weight: 600;
  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;


export const Description = styled.p``;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Option = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 9px;
  background-color: #151618;
  margin-top: 8px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
  width: 100%;
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 600px;
  padding: 20px;
  color: #000;
  border-radius: 9px;
  gap: 1em;
  background-color: #fff;
`;
