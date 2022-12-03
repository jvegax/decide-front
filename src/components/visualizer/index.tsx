import { FC } from "react";
import { Props } from "./types";
import { useTranslation } from "react-i18next";
import useLogic from "./logic";
import { useParams } from "react-router-dom";
import useVotaciones from "../../hooks/useVotaciones";
import { Voting } from "../votingCard/types";

const votacionEjemplo = {
  id: 8,
  name: "Desplegar los viernes",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere consequat auctor. Fusce suscipit mauris augue, et porttitor tortor ullamcorper a. Suspendisse consequat sed augue id dignissim. \r\n\r\nCras molestie lectus sed risus tincidunt, a ultrices tellus feugiat. Etiam dictum enim eu elit fermentum, ac hendrerit nisl maximus",
  question: {
    desc: "¿Deberíamos desplegar los viernes?",
    options: [
      {
        number: 1,
        option: "Si",
      },
      {
        number: 2,
        option: "No",
      },
      {
        number: 3,
        option: "Sí, pero que lo haga otro",
      },
    ],
  },
  start_date: null,
  end_date: null,
  pub_key: null,
  auths: [
    {
      name: "xd",
      url: "http://localhost:8000",
      me: true,
    },
  ],
  tally: null,
  postproc: null,
};

const VotingVisualizer: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { votaciones } = useVotaciones();
  const votacion = votaciones.find((votacion) => votacion.id === Number(id));
  const { results, finished } = useLogic({votacion});


  const handleRenderVisualizer = () => {
    return <h1>Votacion terminada</h1>;
  };

  return (
    <>
      {finished ? (
        <h1>Ha terminado</h1>
      ) : (
        <h1>Esta votacion no ha terminado!</h1>
      )}
    </>
  );
};

export default VotingVisualizer;
