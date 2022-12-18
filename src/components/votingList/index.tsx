import { memo } from "react";
import useVotaciones from "../../hooks/useVotaciones";
import VotingCard from "../votingCard";
import { ListContainer } from "./styles";
import { useTranslation } from "react-i18next";
import SpinnerIndicator from "../spinner";

const VotingList = () => {
  const { t } = useTranslation();
  const { votaciones, loading } = useVotaciones();

  const handleRenderVotaciones = () =>
    votaciones.map((votacion) => (
      <VotingCard key={votacion.id} votacion={votacion} />
    ));

  return (
    <>
      <h1>{t("voting_lists")}</h1>
      <ListContainer>
        {loading ? (
          <SpinnerIndicator color="#343434ed" />
        ) : (
          handleRenderVotaciones()
        )}
      </ListContainer>
    </>
  );
};

export default memo(VotingList);
