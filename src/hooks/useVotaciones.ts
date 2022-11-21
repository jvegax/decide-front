import { useMemo, useState } from "react";

const MOCK_DATA = {
  id: 3,
  name: "Voting test",
  desc: "description",
  question: {
    desc: "django sucks",
    options: [
      {
        number: 1,
        option: "yes",
      },
      {
        number: 2,
        option: "yes",
      },
    ],
  },
  start_date: null,
  end_date: null,
  pub_key: null,
  auths: [
    {
      name: "xd",
      url: "http://localhost:8000",
      me: true,
    },
  ],
  tally: null,
  postproc: null,
};

const useVotacion = () => {
  const votacion = useMemo(() => MOCK_DATA, []);
  console.log(votacion);
  return { votacion };
};

export default useVotacion;
