import type { Voting, VotingResults } from "../votingCard/types";
import { ChartDataProps, Props } from "./types";

export const useLogic = ({ votacion }: Props) => {
  const results: VotingResults = votacion?.postproc?.map((result) => ({
    votes: result?.votes ?? 0,
    option: result?.option ?? "",
  })) as VotingResults;

  const labels = results?.map((result) => result?.option);
  const votes = results?.map((result) => result?.votes);

  const chartData: ChartDataProps = { labels, votes };

  const finished = votacion?.tally ?? false;

  return { finished, results, chartData };
};
