export type VotingProps = {
  name: string;
  desc: string;
  question: string;
  question_opt: Option[];
  token: string;
};

export type Option = {
  value: string;
  key: string;
};
