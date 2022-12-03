import React from "react";
import type { Voting } from "../votingCard/types";

type Props = { votacion: Voting };
type VotingResults = { results: Voting["postproc"] };

const useLogic = ({ votacion }: Props) => {
  let finished;
  let results: VotingResults;
  if (votacion.tally == null || votacion.tally == undefined) {
    return { finished: false, results: null };
  } else {
    results = votacion.postproc;
  }
  return { finished, results };
};

export default useLogic;
