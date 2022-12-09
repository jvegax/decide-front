import { memo, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useDecide from "../../hooks/useDecide";
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

const VotingForm = () => {
  const { authenticated } = useAuth();
  const { user } = useDecide();
  const [name, setName] = useState<VotingProps["name"]>("");
  const [description, setDescription] = useState<VotingProps["desc"]>("");
  const [question, setQuestion] = useState<VotingProps["question"]>("");
  const [options, setOptions] = useState<VotingProps["question_opt"]>([]);
  const [voters, setVoters] = useState<Census["voters"]>([]);

  return (
    <>
      {authenticated && user?.is_staff ? (
        <>
          <MainTitle>Nueva votación</MainTitle>
          <Form>
            <VotingContainer>
              <Title>Datos de la votación</Title>
              <LabelContainer>
                Titulo de la votación
                <Input name="titulo" type="text" />
              </LabelContainer>
              <LabelContainer>
                Descripción de la votación
                <Input name="descripcion" type="text" />
              </LabelContainer>
              <LabelContainer>
                Pregunta
                <Input name="pregunta" type="text" />
              </LabelContainer>
              <LabelContainer>
                Opciones
                <Input name="opciones" type="text" />
                <Input name="opciones" type="text" />
              </LabelContainer>
            </VotingContainer>
            <VotingContainer>
              <Title>Datos del censo</Title>
              <Paragraph>
                Aquí debes seleccionar quien tiene permitido realizar votaciones
              </Paragraph>
          <SubmitButton>Crear votación</SubmitButton>
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
