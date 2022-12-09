import { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Status,
  Title,
} from "./styles";
import { Props } from "./types";

const VotingCard: FC<Props> = ({ votacion }) => {
  const navigate = useNavigate();
  const onPressVotacion = () => {
    navigate(`/votacion/${votacion.id}`);
  };

  const handleStatus = () => {
    if (votacion.end_date != null){
      return "Finished";
    } else if (votacion.start_date != null){
      return "Started";
    } else {
      return "Pending";
    }
  }
  return (
    <Container onClick={onPressVotacion}>
      <Button>
        <Title>{votacion.name}</Title>
        <Status status={handleStatus()}>{handleStatus()}</Status>
      </Button>
    </Container>
  );
};

export default VotingCard;
