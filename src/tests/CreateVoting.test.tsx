const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

// mock use decide context admin user
jest.mock("../hooks/useDecide", () => {
  return () => ({
    user: {
      is_staff: true,
    },
  });
});

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import VotingForm from "../components/votingForm";

describe("Testear el componente de formulario de votación", () => {
    test("Comprobar datos de formulario", () => {
        const { getByText } = render(<VotingForm />);
        expect(getByText("create_voting")).toBeInTheDocument();
        expect(getByText("title_voting")).toBeInTheDocument();
        expect(getByText("desc_voting")).toBeInTheDocument();
        expect(getByText("question_voting")).toBeInTheDocument();
        expect(getByText("options_voting")).toBeInTheDocument();
        expect(getByText("census_voting")).toBeInTheDocument();
    });
});