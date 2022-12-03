import { useMemo } from "react";
import type { Voting } from "../votingCard/types";

type Props = {
  votacion: Voting;
};

type VotingResults = {
  results: Voting["postproc"];
};

const useLogic = ({ votacion }: Props) => {
  const results = useMemo<VotingResults>(() => {
    const results = votacion?.postproc;
    return { results };
  }, [votacion]);

  const finished = useMemo(() => {
    return votacion?.tally !== null ? true : false;
  }, [votacion]);

  return { finished, results };
};

export default useLogic;
