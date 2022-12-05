import { FC } from "react";
import { Props } from "./types";
import { useTranslation } from "react-i18next";
import useLogic from "./logic";
import { useParams } from "react-router-dom";
import useVotaciones from "../../hooks/useVotaciones";
import { Voting } from "../votingCard/types";
import {
  Button,
  Container,
  Description,
  Option,
  OptionContainer,
  QuestionTitle,
  Title,
  OptionGanadora,
  OptionPerdedora
} from "./styles";

const VotingVisualizer: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { votaciones } = useVotaciones();
  const votacion = votaciones.find((votacion) => votacion.id === Number(id));
  const { results, finished } = useLogic({ votacion });

  const handleRenderVisualizer = () => {
    return <h1>Votacion terminada</h1>;
  };
  
  const opciones = votacion?.postproc;
  
  return (
    <>
      {finished ? (
        <>
          <Container>
            <Title>Estos son los resultados de: </Title>
            <Title>"{votacion?.name}"</Title>
            <OptionContainer>
              <Description>La opción mas votada ha sido ... 🥁 🥁</Description>
              <OptionGanadora>{ votacion?.postproc[0]?.option ?? '' }</OptionGanadora>
              <OptionPerdedora>{votacion?.postproc[1]?.option}</OptionPerdedora>
              <OptionPerdedora>{votacion?.postproc[2]?.option}</OptionPerdedora>
            </OptionContainer>
          </Container>
        </>
      ) : (
        <h1>Esta votacion no ha terminado!</h1>
      )}
    </>
  );
};

export default VotingVisualizer;
