import { FC } from "react";
import { Container, Description, Title, OptionContainer,Option,QuestionTitle, Button } from "./styles";
import { Props } from "./types";
import {useTranslation} from "react-i18next";

const VotingDetails: FC<Props> = ({ votacion }) => {
  const {t} = useTranslation();
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
    </>
  );
};

export default VotingDetails;
