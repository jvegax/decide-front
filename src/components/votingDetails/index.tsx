import { FC, useState } from "react";
import {
  Container,
  Description,
  Title,
  OptionContainer,
  Option,
  QuestionTitle,
  Button,
} from "./styles";
import { Props } from "./types";

const VotingDetails: FC<Props> = ({ votacion }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectOption = (e: any) => {
    e.preventDefault();
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <Container>
        <Title>{votacion?.name}</Title>
        <Description>{votacion?.desc}</Description>
        <QuestionTitle>{votacion?.question?.desc}</QuestionTitle>
        <OptionContainer>
          {votacion?.question?.options?.map((option) => (
            <Option key={option.number} onClick={handleSelectOption}>
              {option.option}
            </Option>
          ))}
        </OptionContainer>
      </Container>
      <Button>Enviar respuesta</Button>
    </>
  );
};

export default VotingDetails;
