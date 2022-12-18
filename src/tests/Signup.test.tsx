const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Register } from "../components";

describe("renderiza el registro correctamente en español", () => {
  test("renderiza bien el contenedor y el titulo", () => {
    render(<Register />);
    expect(screen.getByText("register_to_decide")).toBeInTheDocument();
  });

  test("renderiza bien los inputs y sus etiquetas", () => {
    render(<Register />);
    expect(screen.getByPlaceholderText("username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("confirm_password")).toBeInTheDocument();

    expect(screen.getByText("username:")).toBeInTheDocument();
    expect(screen.getByText("email:")).toBeInTheDocument();
    expect(screen.getByText("password:")).toBeInTheDocument();
    expect(screen.getByText("confirm_password:")).toBeInTheDocument();
  });

  test("renderiza bien el boton de inicio de sesíon", () => {
    render(<Register />);
    expect(screen.getByText("register")).toBeInTheDocument();
  });
});
