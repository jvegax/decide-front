import { FC } from "react";
import { Container, Description, Title, OptionContainer, Option, QuestionTitle, Button, ButtonResult } from "./styles";
import { Props } from "./types";
import { useTranslation } from "react-i18next";
import Visualizer from "../visualizer";
import { useNavigate } from 'react-router-dom';


const VotingDetails: FC<Props> = ({ votacion }) => {
  const { t } = useTranslation();
  
  const navigate = useNavigate();
  const handleResults = async (e: any) => {
    e.preventDefault();
    navigate(`/visualizer/${votacion?.id}`);
  };

  return (
    <>
      <Container>
        <Title>{votacion?.name}</Title>
        <Description>{votacion?.desc}</Description>
        <QuestionTitle>{votacion?.question?.desc}</QuestionTitle>
        <OptionContainer>
          {votacion?.question?.options?.map((option) => (
            <Option>{option.option}</Option>
          ))}
        </OptionContainer>
      </Container>
      <Button>{t('submit_vote')}</Button>
      <ButtonResult onClick={handleResults}>{t('results')}</ButtonResult>
    </>
  );
};

export default VotingDetails;
