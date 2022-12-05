export type Props = {
  votacion: Voting;
  key: number;
};

export type VotingResults = {
  votes: number;
  number: number;
  option: string;
  postproc: number;
}[];

export type Voting = {
  key: number;
  id: number;
  name: string;
  desc: string;
  question: {
    desc: string;
    options: Option[];
  };
  start_date: any;
  end_date: any;
  pub_key: any;
  auths: [
    {
      name: string;
      url: string;
      me: boolean;
    }
  ];
  tally: number[] | null;
  postproc:
    | {
        votes: number;
        number: number;
        option: string;
        postproc: number;
      }[]
    | null;
};

export type Option = {
  number: number;
  option: string;
};
