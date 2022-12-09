import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { getVotingStatus } from "../../utils/votingStatus";
import { Button, Container, Status, Title } from "./styles";
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
        <Status status={getVotingStatus(votacion)}>
          {getVotingStatus(votacion)}
        </Status>
      </Button>
    </Container>
  );
};

export default VotingCard;
