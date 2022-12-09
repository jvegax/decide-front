import { FC, memo, ReactNode, useMemo, useRef, useState } from "react";
import {
  Container,
  Description,
  Title,
  OptionContainer,
  Option,
  QuestionTitle,
  Button,
  ButtonResult,
} from "./styles";
import { Props } from "./types";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getVotingStatus } from "../../utils/votingStatus";
import { Status } from "../votingCard/styles";
import Confetti from "react-confetti";

const VotingDetails: FC<Props> = ({ votacion }) => {
  const { t } = useTranslation();
  const [displayConfetti, setDisplayConfetti] = useState(false);

  const navigate = useNavigate();
  const handleResults = async (e: any) => {
    e.preventDefault();
    navigate(`/visualizer/${votacion?.id}`);
  };

  const onSubmitVote = () => {
    setDisplayConfetti(true);
    setTimeout(() => {
      setDisplayConfetti(false);
      navigate("/");
    }, 5000);
  };

  const disabled = useMemo(() => {
    if (votacion !== null) {
      let status = getVotingStatus(votacion);
      if (status === "Finished" || status === "Pending") {
        return true;
      } else {
        return false;
      }
    }
  }, [votacion]);

  const handleStatus = useMemo(() => {
    return votacion !== null ? getVotingStatus(votacion) : "Pending";
  }, [votacion]);

  return (
    <>
      {displayConfetti && (
        <>
          <Title>Gracias por votar! Te notificaremos cuando la votación haya terminado</Title>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={250}
          />
        </>
      )}
      {!displayConfetti && (
        <>
          <Container>
            <Status status={handleStatus}>{handleStatus}</Status>
            <Title>{votacion?.name}</Title>
            <Description>{votacion?.desc}</Description>
            <QuestionTitle>{votacion?.question?.desc}</QuestionTitle>
            <OptionContainer>
              {votacion?.question?.options?.map((option) => (
                <Option key={option.number}>{option.option}</Option>
              ))}
            </OptionContainer>
          </Container>
          <Button disabled={disabled} onClick={onSubmitVote}>
            {t("submit_vote")}
          </Button>
          <ButtonResult onClick={handleResults}>{t("results")}</ButtonResult>
        </>
      )}
    </>
  );
};

export default memo(VotingDetails);
