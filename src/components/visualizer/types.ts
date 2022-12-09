import { Voting } from "../votingCard/types";

export type Props = {
  votacion: Voting | undefined;
};

export type ChartDataProps = {
  labels: string[] | undefined;
  votes: number[] | undefined;
};

export type ChartProps = {
  chartData: ChartDataProps;
};
