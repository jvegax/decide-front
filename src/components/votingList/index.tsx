import useVotaciones from "../../hooks/useVotaciones";
import VotingCard from "../votingCard";
import { ListContainer } from "./styles";

const VotingList = () => {
  const { votaciones, loading } = useVotaciones();
  console.log(votaciones);
  const handleRenderVotaciones = () =>
    votaciones.map((votacion) => {
      console.log(votacion);
      return <VotingCard key={votacion.id} votacion={votacion} />;
    });

  return (
    <>
      <h1>Listado de votaciones</h1>
      <ListContainer>{!loading && handleRenderVotaciones()}</ListContainer>
    </>
  );
};

export default VotingList;
