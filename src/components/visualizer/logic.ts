import type { Voting, VotingResults } from "../votingCard/types";

type Props = {
  votacion: Voting | undefined;
};

const useLogic = ({ votacion }: Props) => {
  const results: VotingResults = votacion?.postproc?.map((result) => ({
    votes: result?.votes ?? 0,
    number: result?.number ?? 0,
    option: result?.option ?? "",
    postproc: result?.postproc ?? 0,
  })) as VotingResults;

  const finished = votacion?.tally ?? false;
  const tally = votacion?.tally;
  return { finished, results };
};

export default useLogic;
