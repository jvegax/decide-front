import { FC } from "react";
import { Props } from "./types";
import { useTranslation } from "react-i18next";
import { useLogic } from "./logic";
import { useParams } from "react-router-dom";
import useVotaciones from "../../hooks/useVotaciones";
import {
  Container,
  Description,
  OptionContainer,
  Title,
  ChartContainer,
} from "./styles";
import ReactApexChart from "react-apexcharts";
import myGif from "../../images/pepefrg-4.gif";

const VotingVisualizer: FC = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { votaciones } = useVotaciones();
  const votacion = votaciones.find((votacion) => votacion.id === Number(id));
  const { finished, chartData } = useLogic({ votacion });

  return (
    <>
      {finished ? (
        <>
          <Container>
            <Title>Estos son los resultados de: </Title>
            <Title>"{votacion?.name}"</Title>
            <Description>La opción mas votada ha sido ... 🥁 🥁</Description>
            <ReactApexChart
              options={{
                chart: {
                  width: 380,
                  type: "pie",
                },
                labels: chartData.labels,
                legend: {
                  position: "bottom",
                  labels: {
                    colors: "#fff",
                    useSeriesColors: false,
                  },
                },
                responsive: [
                  {
                    breakpoint: 480,
                    options: {
                      chart: {
                        width: 250,
                      },
                      legend: {
                        position: "bottom",
                        labels: {
                          colors: "#fff",
                          useSeriesColors: false,
                        },
                      },
                    },
                  },
                ],
              }}
              series={chartData.votes}
              type="pie"
              width={500}
            />
          </Container>
        </>
      ) : (
        <>
        <Container>
           <Title>¡Esta votacion no ha terminado! </Title>
           <img src={myGif} alt="my-gif" width={220} />
           <Title>Vuelve mas tarde </Title>
        </Container>
        </>
      )}
    </>
  );
};

export default VotingVisualizer;
