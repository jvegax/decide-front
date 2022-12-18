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
import en from "../i18n/languages/en-US";
import es from "../i18n/languages/es-ES";
import de from "../i18n/languages/de-DE";
import se from "../i18n/languages/se-SV";
import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Profile } from "../pages";
import { I18nextProvider, I18nContext } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/navbar";
import i18n from "../i18n";

describe("Testear traducciones en el componente de perfil", () => {
  test("Comprobar perfil en ingles", () => {
    const navbar = render(
      <MemoryRouter>
        {" "}
        <Navbar />
      </MemoryRouter>
    );

    // cambiar el idioma a en-US
    fireEvent.click(navbar.getByText("🇺🇸"));
    waitFor(() => i18n.changeLanguage("en_US"));
    let i18nMock: any;

    //mock i18n fro correct language change
    i18nMock = {
      ...i18n,
      language: "en_US",
      changeLanguage: jest.fn(),
      t: jest.fn().mockImplementation((key: string) => key),
    };

    const component = render(
      <I18nextProvider i18n={i18nMock}>
        <I18nContext.Provider value={i18nMock}>
          <Profile />
        </I18nContext.Provider>
      </I18nextProvider>
    );

    const profile = component.getByText(en.profile);
    const name = component.getByText(en.name);
    const username = component.getByText(en.username);
    const surname = component.getByText(en.surname);
    const email = component.getByText(en.email);

    //comprobar que el idioma se ha cambiado correctamente
    expect(i18n.language).toBe("en_US");

    //comprobar que los botones se han internacionalizado correctamente
    expect(profile).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(surname).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  test("Comprobar perfil en aleman", () => {
    const navbar = render(
      <MemoryRouter>
        {" "}
        <Navbar />
      </MemoryRouter>
    );

    // cambiar el idioma a en-US
    fireEvent.click(navbar.getByText("🇩🇪"));
    waitFor(() => i18n.changeLanguage("de_DE"));
    let i18nMock: any;

    //mock i18n fro correct language change
    i18nMock = {
      ...i18n,
      language: "de_DE",
      changeLanguage: jest.fn(),
      t: jest.fn().mockImplementation((key: string) => key),
    };

    const component = render(
      <I18nextProvider i18n={i18nMock}>
        <I18nContext.Provider value={i18nMock}>
          <Profile />
        </I18nContext.Provider>
      </I18nextProvider>
    );

    const profile = component.getByText(de.profile);
    const name = component.getByText(de.name);
    const username = component.getByText(de.username);
    const surname = component.getByText(de.surname);
    const email = component.getByText(de.email);

    //comprobar que el idioma se ha cambiado correctamente
    expect(i18n.language).toBe("de_DE");

    //comprobar que los botones se han internacionalizado correctamente
    expect(profile).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(surname).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  test("Comprobar perfil en sueco", () => {
    const navbar = render(
      <MemoryRouter>
        {" "}
        <Navbar />
      </MemoryRouter>
    );

    // cambiar el idioma a en-US
    fireEvent.click(navbar.getByText("🇸🇪"));
    waitFor(() => i18n.changeLanguage("se_SV"));
    let i18nMock: any;

    //mock i18n fro correct language change
    i18nMock = {
      ...i18n,
      language: "se_SV",
      changeLanguage: jest.fn(),
      t: jest.fn().mockImplementation((key: string) => key),
    };

    const component = render(
      <I18nextProvider i18n={i18nMock}>
        <I18nContext.Provider value={i18nMock}>
          <Profile />
        </I18nContext.Provider>
      </I18nextProvider>
    );

    const profile = component.getByText(se.profile);
    const name = component.getByText(se.name);
    const username = component.getByText(se.username);
    const surname = component.getByText(se.surname);
    const email = component.getByText(se.email);

    //comprobar que el idioma se ha cambiado correctamente
    expect(i18n.language).toBe("se_SV");

    //comprobar que los botones se han internacionalizado correctamente
    expect(profile).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(surname).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
