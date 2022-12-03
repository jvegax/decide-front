import { useParams } from "react-router-dom";
import VotingDetails from "../../components/votingDetails";
import useVotaciones from "../../hooks/useVotaciones";

const Details = () => {
  const { id } = useParams();
  const { votaciones } = useVotaciones();
  const votacion = votaciones.find((votacion) => votacion.id === Number(id)) || {};

  return <VotingDetails votacion={votacion} />;
};

export default Details;