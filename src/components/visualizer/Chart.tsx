import React from "react";
import ReactApexChart from "react-apexcharts";

const Chart = ({ chartData }: any) => {
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
      width={500}
    />
  );
};

export default Chart;
