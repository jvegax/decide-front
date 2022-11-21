import { useState } from "react";
import useVotaciones from "../../hooks/useVotaciones";
import VotingCard from "../votingCard";
import { ListContainer } from "./styles";

const VotingList = () => {
  const { votaciones } = useVotaciones();
  const [loading, setLoading] = useState(true);

  const handleRenderVotaciones = () => votaciones.map((votacion) => <VotingCard votacion={votacion} />);

  return (
    <>
      <h1>Listado de votaciones</h1>
      <ListContainer>
      {loading && handleRenderVotaciones()}
      </ListContainer>
    </>
  );
};

export default VotingList;
