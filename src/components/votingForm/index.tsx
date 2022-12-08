import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import {
  Input,
  LabelContainer,
  SubmitButton,
  Title,
  VotingFormContainer,
} from "./styles";
import { Option, VotingProps } from "./types";

const VotingForm = () => {
  const { authenticated } = useAuth();
  const [name, setName] = useState<VotingProps["name"]>("");
  const [description, setDescription] = useState<VotingProps["desc"]>("");
  const [question, setQuestion] = useState<VotingProps["question"]>("");
  const [options, setOptions] = useState<Option[]>([]);

  return (
    <>
      {authenticated ? (
        <>
          <VotingFormContainer>
            <Title>Crear nueva votación</Title>
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
          </VotingFormContainer>
          <SubmitButton>Crear votación</SubmitButton>
        </>
      ) : (
        <h1>❌ Ups...</h1>
      )}
    </>
  );
};

export default VotingForm;
