import type { Voting } from "../votingCard/types";

type Props = {
  votacion: Voting | undefined;
};

const useLogic = ({ votacion }: Props) => {

  const results: Voting["postproc"] | undefined =  votacion?.postproc;
  const finished = votacion?.tally ?? false;
  const tally = votacion?.tally;
  return { finished, results };
};

export default useLogic;
