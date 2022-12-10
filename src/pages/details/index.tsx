import { memo } from "react";
import { useParams } from "react-router-dom";
import VotingDetails from "../../components/votingDetails";
import useVotaciones from "../../hooks/useVotaciones";

const Details = () => {
  const { id } = useParams();
  const { votaciones } = useVotaciones();
  const votacion =
    votaciones.find((votacion) => votacion.id === Number(id)) || null;

  return <VotingDetails votacion={votacion} />;
};

export default memo(Details);
