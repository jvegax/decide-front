import { FC } from "react";
import { Props } from "./types";
import { useTranslation } from "react-i18next";
import useLogic from "./logic";

const VotingVisualizer: FC<Props> = ({ votacion }) => {
  const { t } = useTranslation();
  const { results, finished } = useLogic({ votacion });

  const handleRenderVisualizer = () => {
    return <h1>Votacion terminada</h1>;
  };

  return (
    <>
      {finished ? (
        handleRenderVisualizer
      ) : (
        <h1>Esta votacion no ha terminado!</h1>
      )}
    </>
  );
};

export default VotingVisualizer;
