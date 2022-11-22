import { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Title,
} from "./styles";
import { Props } from "./types";

const VotingCard: FC<Props> = ({ votacion }) => {
  const navigate = useNavigate();
  const onPressVotacion = () => {
    navigate(`/votacion/${votacion.id}`);
  };
  return (
    <Container onClick={onPressVotacion}>
      <Button>
        <Title>{votacion.name}</Title>
      </Button>
    </Container>
  );
};

export default VotingCard;
