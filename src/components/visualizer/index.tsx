import { FC } from "react";
import {
  Container,
  Description,
  Title,
  OptionContainer,
  Option,
  QuestionTitle,
  Button,
} from "./styles";
import { Props } from "./types";
import { useTranslation } from "react-i18next";

const VotingVisualizer: FC<Props> = ({ votacion }) => {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Title>{votacion?.name}</Title>
        <Title>{votacion?.id}</Title>
        <Description>{votacion?.desc}</Description>
        <QuestionTitle>{votacion?.question?.desc}</QuestionTitle>
        <OptionContainer>
          <progress value="60" max="100" />
          {votacion?.question?.options?.map((option) => (
            <Option>{option.option}</Option>
          ))}
        </OptionContainer>
      </Container>
      <Button>{t("submit_vote")}</Button>
    </>
  );
};

export default VotingVisualizer;
