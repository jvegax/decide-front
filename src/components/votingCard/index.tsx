import { FC } from "react";
import {
  Button,
  Container,
  Title,
} from "./styles";
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
      <Button>
        <Title>{votacion.name}</Title>
      </Button>
    </Container>
  );
};

export default VotingCard;
