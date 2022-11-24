export type Voting = {
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
  tally: any;
  postproc: any;
};

export type Option = {
    number: number;
    option: string;
};
