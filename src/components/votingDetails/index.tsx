import { FC } from "react";
import { Container, Description, Title, OptionContainer,Option,QuestionTitle, Button } from "./styles";
import { Props } from "./types";

const VotingDetails: FC<Props> = ({ votacion }) => {
  return (
    <>
    
    <Container>
      <Title>{votacion?.name}</Title>
      <Description>{votacion?.desc}</Description>
      <QuestionTitle>{votacion?.question?.desc}</QuestionTitle>
      <OptionContainer>
        {votacion?.question?.options?.map((option) => (
          <Option>{option.option}</Option>
        ))}
      </OptionContainer>
    </Container>
    <Button>Enviar respuesta</Button>
    </>
  );
};

export default VotingDetails;
