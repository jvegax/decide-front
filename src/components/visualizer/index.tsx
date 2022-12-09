import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { useLogic } from "./logic";
import { useParams } from "react-router-dom";
import useVotaciones from "../../hooks/useVotaciones";
import { BackButton, Container, Title, TitleVotacion } from "./styles";
import myGif from "../../images/pepefrg-4.gif";
import Chart from "./Chart";

const VotingVisualizer: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { votaciones } = useVotaciones();
  const votacion = votaciones.find((votacion) => votacion.id === Number(id));
  const { finished, chartData } = useLogic({ votacion });
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      {finished ? (
        <>
          <Container>
            <Title>Estos son los resultados de: </Title>
            <TitleVotacion>"{votacion?.name}"</TitleVotacion>
            <Chart chartData={chartData} />
            <BackButton onClick={handleGoBack}>Volver</BackButton>
          </Container>
        </>
      ) : (
        <>
          <Container>
            <Title>
              Aún no ha terminado la votación, por favor vuelve más tarde{" "}
            </Title>
            <img src={myGif} alt="my-gif" width={220} />
            <BackButton onClick={handleGoBack}>Volver</BackButton>
          </Container>
        </>
      )}
    </>
  );
};

export default memo(VotingVisualizer);
