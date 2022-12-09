export type VotingProps = {
  name: string;
  desc: string;
  question: string;
  question_opt: string[];
  token: string;
};

export type Census = {
  voting_id: number;
  voters: number[];
};
