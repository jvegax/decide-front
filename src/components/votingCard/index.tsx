import { FC } from "react";
import { Container, Description, QuestionContainer, Title } from "./styles";
import { Props } from "./types";

const votacion = {
  id: 3,
  name: "Voting test",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  question: {
    desc: "Should we deploy on Friday's?",
    options: [
      {
        number: 1,
        option: "Yes",
      },
      {
        number: 2,
        option: "No",
      },
    ],
  },
};

const VotingCard: FC<Props> = ({ votacion }) => {
  return (
    <Container>
      <Title>
        {votacion.name} - {votacion.id}
      </Title>
      <Description>{votacion.desc}</Description>
      <QuestionContainer>
        <p>{votacion.question.options[0].option}</p>
        <p>{votacion.question.options[1].option}</p>
      </QuestionContainer>
    </Container>
  );
};

export default VotingCard;
