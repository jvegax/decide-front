import styled from "styled-components";
import { StatusProps } from "./types";


export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  flex: 0.8;
  gap: 1em;
  width: 100%;
  max-width: 600px;
  height: 65px;
  flex-direction: row;
  border-radius: 9px;
  background-color: #36393d;
  padding: 20px;
  margin-top: 8px;
  border: none;
  cursor: pointer;
`;

export const Status = styled.div<StatusProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 80px;
  border-radius: 9px;
  padding: 8px;
  font-weight: 600;
  font-size: 14px;
  background-color: ${(props) => { 
    switch (props.status) {
      case "Started":
        return "#43b581";
      case "Finished":
        return "#f04747";
      case "Pending":
        return "#faa61a";
      default:
        return "#43b581";
    }
  }};
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
