const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

import { fireEvent, render, screen } from "@testing-library/react";
import Logout from "../components/logout/index";
import "@testing-library/jest-dom";

describe("renderiza el logout correctamente en español", () => {
  test("renderiza bien el contenedor y el titulo", () => {
    render(<Logout />);
    expect(screen.getByText("¿Seguro que quieres salir de decide?")).toBeInTheDocument();
  });

  test("renderiza bien el boton de salir", () => {
    render(<Logout />);
    expect(screen.getByText("Salir")).toBeInTheDocument();
  });

  test('al salir de la sesion redirige correctamente al inicio', () => {

    // render the login screen and click the login button
    const { getByText } = render(<Logout/>);
    const logoutButton = getByText('Salir');
    // click en el boton de mostrar resultados
    fireEvent.click(logoutButton);

    // comprobar si se llama a la funcion navigate
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/');

  });

});
