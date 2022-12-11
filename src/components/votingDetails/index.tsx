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
  ButtonStart,
  ButtonStop,
  ButtonTally,
} from "./styles";
import { Props } from "./types";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getVotingStatus } from "../../utils/votingStatus";
import { Status } from "../votingCard/styles";
import Confetti from "react-confetti";
import useDecide from "../../hooks/useDecide";
import useAuth from "../../hooks/useAuth";

const VotingDetails: FC<Props> = ({ votacion }) => {
  const { t } = useTranslation();
  const [displayConfetti, setDisplayConfetti] = useState(false);
  const navigate = useNavigate();
  const { user } = useDecide();
  const [optionChosen, setOptionChosen] = useState<number | null>(null);
  const { authenticated } = useAuth();

  const handleResults = async (e: any) => {
    e.preventDefault();
    navigate(`/visualizer/${votacion?.id}`);
  };

  const startCondition =
    votacion !== null
      ? authenticated &&
        user?.is_staff &&
        getVotingStatus(votacion) === "Pending"
      : false;
  const stopCondition =
    votacion !== null
      ? authenticated &&
        user?.is_staff &&
        getVotingStatus(votacion) === "Started"
      : false;
  const tallyCondition =
    votacion !== null
      ? authenticated &&
        user?.is_staff &&
        getVotingStatus(votacion) === "Finished"
      : false;

  const handleStart = async (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const response = await fetch(
      `http://localhost:8000/voting/${votacion?.id}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "start",
          token: token,
        }),
      }
    ).then((response) => navigate(`/`));
  };

  const handleStop = async (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const response = await fetch(
      `http://localhost:8000/voting/${votacion?.id}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "stop",
          token: token,
        }),
      }
    ).then((response) => navigate(`/`));
  };

  const handleTally = async (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const response = await fetch(
      `http://localhost:8000/voting/${votacion?.id}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "tally",
          token: token,
        }),
      }
    ).then((response) => navigate(`/visualizer/${votacion?.id}`));
  };

  const handleOptionChosen = (option: any) => {
    console.log(option);
    setOptionChosen(option);
  };

  const onSubmitVote = async (e: any) => {
    setDisplayConfetti(true);
    //Send vote to backend OJO: esto corresponde al issue de registrar voto
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:8000/store/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          voting_id: votacion?.id,
          voter_id: user?.id,
          opt_number: optionChosen,
          token: token,
        }),
      });

      const data = await res.json();
      console.log({ data });
    } catch (error) {
      console.log(error);
    }

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
          <Title>
            Gracias por votar! Te notificaremos cuando la votación haya
            terminado
          </Title>
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
                <Option
                  chosen={option.number === optionChosen}
                  key={option.number}
                  onClick={() => handleOptionChosen(option.number)}
                >
                  {option.option}
                </Option>
              ))}
            </OptionContainer>
          </Container>
          <Button disabled={disabled} onClick={onSubmitVote}>
            {t("submit_vote")}
          </Button>
          <ButtonResult onClick={handleResults}>{t("results")}</ButtonResult>

          {startCondition && (
            <ButtonStart onClick={handleStart}>{t("start_voting")}</ButtonStart>
          )}

          {stopCondition && (
            <ButtonStop onClick={handleStop}>{t("stop_voting")}</ButtonStop>
          )}

          {tallyCondition && (
            <ButtonTally onClick={handleTally}>{t("tally_voting")}</ButtonTally>
          )}
        </>
      )}
    </>
  );
};

export default memo(VotingDetails);
