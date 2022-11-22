import { useMemo } from "react";

const MOCK_DATA = [
  {
    id: "3",
    name: "Voting test",
    desc: "description",
    question: {
      desc: "question description example",
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
    id: "4",
    name: "Commits policy",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    question: {
      desc: "question description example",
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
    id: "5",
    name: "Deploy on Friday's",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    question: {
      desc: "question description example",
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
    id: "6",
    name: "Front with React",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    question: {
      desc: "question description example",
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
];
const useVotacion = () => {
  const votaciones = useMemo(() => MOCK_DATA, []);

  return { votaciones };
};

export default useVotacion;
