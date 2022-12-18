import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useDecide } from "../../hooks";

import {
  Form,
  Input,
  LabelContainer,
  MainTitle,
  Paragraph,
  SubmitButton,
  Title,
  VotingContainer,
} from "./styles";
import { Census, VotingProps } from "./types";
import { useTranslation } from "react-i18next";

const VotingForm = () => {
  const { authenticated } = useAuth();
  const { t } = useTranslation();
  const { user } = useDecide();
  const [name, setName] = useState<VotingProps["name"]>("");
  const [description, setDescription] = useState<VotingProps["desc"]>("");
  const [question, setQuestion] = useState<VotingProps["question"]>("");
  const [options, setOptions] = useState<VotingProps["question_opt"]>([]);
  const [firstOption, setFirstOption] = useState<string>("");
  const [secondOption, setSecondOption] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleCreateVoting = async () => {
    if (
      !!name &&
      !!description &&
      !!question &&
      !!firstOption &&
      !!secondOption
    ) {
      const createVoting = async () => {
        setLoading(true);
        const voting = {
          name,
          desc: description,
          question,
          question_opt: options,
          token: user?.auth_token,
        };
        try {
          const response = await fetch("http://localhost:8000/voting/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(voting),
          });
          const data = await response.json();
          console.log({ data });
          setLoading(false);
        } catch (error) {
          console.log({ error });
          setLoading(false);
        }
      };
      const res = await createVoting();
      navigate("/");
      console.log({ res });
    }
  };

  useEffect(() => {
    setOptions([firstOption, secondOption]);
  }, [firstOption, secondOption]);
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {authenticated && user?.is_staff ? (
        <>
          <MainTitle>{t("new_voting")} </MainTitle>
          <Form>
            <VotingContainer>
              <Title>{t("data_voting")} </Title>
              <LabelContainer>
                {t("title_voting")}
                <Input
                  name="titulo"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </LabelContainer>
              <LabelContainer>
                {t("desc_voting")}
                <Input
                  name="descripcion"
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </LabelContainer>
              <LabelContainer>
                {t("question_voting")}
                <Input
                  name="pregunta"
                  type="text"
                  onChange={(e) => setQuestion(e.target.value)}
                  required
                />
              </LabelContainer>
              <LabelContainer>
                {t("options_voting")}
                <Input
                  name="opciones"
                  type="text"
                  onChange={(e) => setFirstOption(e.target.value)}
                  required
                />
                <Input
                  name="opciones"
                  type="text"
                  onChange={(e) => setSecondOption(e.target.value)}
                  required
                />
              </LabelContainer>
            </VotingContainer>
            <VotingContainer>
              <Title>{t("census_voting")}</Title>
              <Paragraph>{t("info_voting")}</Paragraph>
              <SubmitButton onClick={handleCreateVoting}>
                {t("create_voting")}
              </SubmitButton>
            </VotingContainer>
          </Form>
        </>
      ) : (
        <h1>❌ Ups...</h1>
      )}
    </>
  );
};

export default memo(VotingForm);
