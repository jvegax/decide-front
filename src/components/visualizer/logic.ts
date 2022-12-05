import type { Voting, VotingResults } from "../votingCard/types";

type Props = {
  votacion: Voting | undefined;
};

export const useLogic = ({ votacion }: Props) => {
  const results: VotingResults = votacion?.postproc?.map((result) => ({
    votes: result?.votes ?? 0,
    option: result?.option ?? ""
  })) as VotingResults;

  const finished = votacion?.tally ?? false;

  return { finished, results };
};