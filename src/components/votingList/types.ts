export type Voting = {
  key: number;
  id: number;
  name: string;
  desc: string;
  question: {
    desc: string;
    options: Option[];
  };
  start_date: string | null;
  end_date: string | null;
  pub_key: string | null;
  auths: [
    {
      name: string;
      url: string;
      me: boolean;
    }
  ];
  tally: number[] | null;
  postproc: {
    votes: number,
    number: number,
    option: string,
    postproc: number
  }[] | null;
};

export type Option = {
  number: number;
  option: string;
};
