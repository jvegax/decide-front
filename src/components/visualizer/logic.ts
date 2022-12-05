import type { Voting, VotingResults } from "../votingCard/types";

type Props = {
  votacion: Voting | undefined;
};

export const useLogic = ({ votacion }: Props) => {
  const results: VotingResults = votacion?.postproc?.map((result) => ({
    votes: result?.votes ?? 0,
    option: result?.option ?? ""
  })) as VotingResults;

  // labels = opcion
  // votes = votos de la opcion
  const labels = results.map((result) => result.option);
  const votes = results.map((result) => result.votes);

  const chartData ={ labels, votes }

  const finished = votacion?.tally ?? false;

  return { finished, results, chartData };
};