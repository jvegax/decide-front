const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

// mock use decide context admin user
jest.mock("../hooks/useDecide", () => {
  return () => ({
    user: {
      name: "Admin",
      surname: "Admin",
      username: "admin",
      email: "admin@gmail.com",
      is_staff: true,
    },
  });
});

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Profile } from "../pages";

describe("Testear el componente de perfil", () => {
  test("Comprobar datos de formulario", () => {
    const { getByText } = render(<Profile />);
    expect(getByText("profile")).toBeInTheDocument();
    expect(getByText("name")).toBeInTheDocument();
    expect(getByText("username")).toBeInTheDocument();
    expect(getByText("surname")).toBeInTheDocument();
    expect(getByText("email")).toBeInTheDocument();
    expect(getByText("telegram_channel")).toBeInTheDocument();
  });
});
