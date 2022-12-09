import { FC, memo } from "react";
import ReactApexChart from "react-apexcharts";
import { ChartProps } from "./types";

const Chart: FC<ChartProps> = ({ chartData }) => {
  return (
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
      width={400}
    />
  );
};

export default memo(Chart);
