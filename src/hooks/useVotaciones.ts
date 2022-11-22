import { useMemo } from "react";

const MOCK_DATA = [
  {
    id: "1",
    name: "DP2 no tiene sentido",
    desc: "La asignatura no tiene ningun sentido",
    question: {
      desc: "¿Crees que la asignatura tiene sentido?",
      options: [
        {
          number: 1,
          option: "Yes",
        },
        {
          number: 2,
          option: "No",
        },
      ],
    },
  },
  {
    id: "2",
    name: "Politica de commits",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    question: {
      desc: "¿Deberíamos redactar una politica de commits?",
      options: [
        {
          number: 1,
          option: "Si",
        },
        {
          number: 2,
          option: "No",
        },
      ],
    },
  },
  {
    id: "3",
    name: "Desplegar los viernes",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    question: {
      desc: "¿Deberíamos aspirar a desplegar los viernes?",
      options: [
        {
          number: 1,
          option: "Si",
        },
        {
          number: 3,
          option: "Sí, pero que lo haga otro.",
        },
        {
          number: 2,
          option: "¿Qué te has fumado?",
        },
      ],
    },
  },
  {
    id: "4",
    name: "Front con React",
    desc: "Esta encuesta se va a realizar para saber si el equipo de desarrollo quiere que el front se haga con React",
    question: {
      desc: "¿Deberíamos hacer el front con React?",
      options: [
        {
          number: 1,
          option: "Si",
        },
        {
          number: 2,
          option: "Sí",
        },
      ],
    },
  },
  {
    id: "5",
    name: "Deja de usar jQuery, estamos en 2022",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    question: {
      desc: "¿Deberíamos dejar de usar jQuery?",
      options: [
        {
          number: 1,
          option: "Si",
        },
        {
          number: 2,
          option: "Sí",
        },
      ],
    },
  },
];
const useVotacion = () => {
  const votaciones = useMemo(() => MOCK_DATA, []);

  return { votaciones };
};

export default useVotacion;
