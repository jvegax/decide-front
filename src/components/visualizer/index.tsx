import { FC } from "react";
import { Props } from "./types";
import { useTranslation } from "react-i18next";
import { useLogic } from "./logic";
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
  OptionPerdedora,
} from "./styles";
import ReactApexChart from "react-apexcharts";

const VotingVisualizer: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { votaciones } = useVotaciones();
  const votacion = votaciones.find((votacion) => votacion.id === Number(id));
  const { results, finished } = useLogic({ votacion });

  console.log(results);

  const handleEtiq = () => {
    
  };

  const handleVotos = () => {
    
  };

  return (
    <>
      {finished ? (
        <>
          <Container>
            <Title>Estos son los resultados de: </Title>
            <Title>"{votacion?.name}"</Title>
            <OptionContainer>
              <Description>La opción mas votada ha sido ... 🥁 🥁</Description>
              <ReactApexChart
                options={{
                  chart: {
                    width: 400,
                    type: "pie",
                  },
                  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
                  responsive: [
                    {
                      breakpoint: 480,
                      options: {
                        chart: {
                          width: 300,
                        },
                        legend: {
                          position: "bottom",
                        },
                      },
                    },
                  ],
                }}
                series={[44, 55, 13, 43, 22]}
                type="pie"
                width={380}
              />
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
