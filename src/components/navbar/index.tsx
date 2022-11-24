import { Link } from "react-router-dom";
import { Button, LinkContainer, NavBar as Nav, NavLink, Title } from "./styles";
import { useTranslation } from "react-i18next";

function languageButtons() {
  const { i18n } = useTranslation();
  return (
    <div>
      <Button
        hidden={i18n.language == "en_US"}
        onClick={() => i18n.changeLanguage("en_US")}
      >
        🇺🇸
      </Button>
      <Button
        hidden={i18n.language == "es_ES"}
        onClick={() => i18n.changeLanguage("es_ES")}
      >
        🇪🇸
      </Button>
      <Button
        hidden={i18n.language == "de_DE"}
        onClick={() => i18n.changeLanguage("de_DE")}
      >
        🇩🇪
      </Button>
      <Button
        hidden={i18n.language == "se_SV"}
        onClick={() => i18n.changeLanguage("se_SV")}
      >
        🇸🇪
      </Button>
    </div>
  );
}

const NavBar = () => {
  const { t } = useTranslation();
  return (
    <Nav>
      <Title>Decide 🫵</Title>
      <LinkContainer>
        <NavLink to="/">Votaciones</NavLink>
        <NavLink to="signin/">Iniciar sesion</NavLink>
        <NavLink to="signup/">Registro</NavLink>
      </LinkContainer>
    </Nav>
  );
};

export default NavBar;
