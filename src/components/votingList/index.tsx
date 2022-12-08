import { memo, useState } from "react";
import useVotaciones from "../../hooks/useVotaciones";
import VotingCard from "../votingCard";
import { ListContainer } from "./styles";
import { useTranslation } from "react-i18next";

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
      <ListContainer>{!loading && handleRenderVotaciones()}</ListContainer>
    </>
  );
};

export default memo(VotingList);
