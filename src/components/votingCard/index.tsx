import useVotacion from "../../hooks/useVotaciones";
import { Container, Title } from "./styles";

const VotingCard = () => {
  const { votacion } = useVotacion();
  return (
    <Container>
      <Title>{votacion.name} - {votacion.id}</Title>
    </Container>
  );
};

export default VotingCard;
