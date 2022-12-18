const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

import { fireEvent, getByPlaceholderText, render, screen } from "@testing-library/react";
import Visualizer from "../components/visualizer/index";
import "@testing-library/jest-dom";

describe("renderiza el visualizer correctamente en español", () => {
  test("renderiza bien el contenedor y el titulo en caso de votacion finalizada", () => {
    render(<Visualizer />);
    expect(screen.getByText("Aún no ha terminado la votación, por favor vuelve más tarde")).toBeInTheDocument();
  });

  test("renderiza bien el boton de salir", () => {
    render(<Visualizer />);
    expect(screen.getByText("Volver")).toBeInTheDocument();
  });

});
