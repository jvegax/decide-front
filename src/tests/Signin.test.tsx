import { render, screen } from '@testing-library/react';
import Login from '../components/signin/index';
import '@testing-library/jest-dom'

describe('renderiza el login correctamente en español', () => {

  test('renderiza bien el contenedor y el titulo', () => {
    render(<Login/>);
    expect(screen.getByText('log_in_to_decide')).toBeInTheDocument()
  });

  test('renderiza bien los inputs y sus etiquetas', () => {
    render(<Login/>);
    expect(screen.getByPlaceholderText('username')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument()

    expect(screen.getByText('username:')).toBeInTheDocument()
    expect(screen.getByText('password:')).toBeInTheDocument()

  });

  test('renderiza bien el boton de inicio de sesíon', () => {
    render(<Login/>);
    expect(screen.getByText('login')).toBeInTheDocument()
  });

  // test('al iniciar sesion redirige correctamente al inicio', () => {
  //   const mockRedirect = jest.fn();
  //   const mockAuthToken = '123456';

  //   // render the login screen and click the login button
  //   const { getByText } = render(<Login/>);
  //   const loginButton = getByText('login');
  //   fireEvent.click(loginButton);

  //   // verify that the redirect function was called with the correct arguments
  //   expect(mockRedirect).toHaveBeenCalledWith('/', {
  //     authToken: mockAuthToken,
  //   });
  // });


});