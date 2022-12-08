import React from "react";
import {
  Input,
  LabelContainer,
  NewOption,
  Title,
  VotingFormContainer,
} from "./styles";

interface VotingFormState {
  options: string[];
}

class VotingForm extends React.Component<{}, VotingFormState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      options: [],
    };
  }

  handleAddOption() {
    this.setState({
      options: [...this.state.options, ""],
    });
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    const options = [...this.state.options];
    options[index] = event.target.value;
    this.setState({ options });
  }

  render() {
    return (
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
          {this.state.options.map((option, index) => (
            <Input
              key={index}
              name="opciones"
              type="text"
              value={option}
              onChange={(event) => this.handleChange(event, index)}
            />
          ))}
          {/* if there are 2 options dont render NewOption button */}
          {this.state.options.length < 2 && (
            <NewOption onClick={this.handleAddOption.bind(this)}>+</NewOption>
          )}
        </LabelContainer>
      </VotingFormContainer>
    );
  }
}

export default VotingForm;
