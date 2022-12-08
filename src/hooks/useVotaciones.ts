import { useEffect, useMemo, useState } from "react";
import { Voting } from "../components/votingList/types";

const useVotaciones = () => {
  const [votaciones, setVotaciones] = useState<Voting[]>([]);
  const [loading, setLoading] = useState(true);

  const getVotaciones = useMemo(async () => {
    setLoading(true);
    const url = "http://127.0.0.1:8000/voting/";
    const response = await fetch(url);
    const data = await response.json();
    const votaciones: Voting[] = data.map((voting: any) => {
      return {
        id: voting.id,
        name: voting.name,
        desc: voting.desc,
        question: {
          desc: voting.question.desc,
          options: voting.question.options.map((option: any) => {
            return {
              number: option.number,
              option: option.option,
            };
          }),
        },
        start_date: voting.start_date,
        end_date: voting.end_date,
        pub_key: voting.pub_key,
        auths: voting.auths.map((auth: any) => {
          return {
            name: auth.name,
            url: auth.url,
            me: auth.me,
          };
        }),
        tally: voting.tally,
        postproc: voting.postproc,
      };
    });
    setVotaciones(votaciones);
    setLoading(false);
    return votaciones;
  }, []);

  useEffect(() => {
    getVotaciones;
  }, []);

  return { votaciones, loading };
};

export default useVotaciones;
