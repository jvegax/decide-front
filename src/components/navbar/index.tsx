import React from "react";
import { Link } from "react-router-dom";
import { Button, LinkContainer, NavBar as Nav, ProfileContainer, Title } from "./styles";
import { useTranslation } from "react-i18next";
import logo from "../../assets/decide-logo.jpg";
import useDecide from "../../hooks/useDecide";

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
  const { authToken } = useDecide();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return (
    <Nav>
      <Link to="/">
        <img src={logo} alt="logo" width={190} />
      </Link> 
      <LinkContainer>
        {languageButtons()}
        <Link to="/">{t("voting")}</Link>
        {!authToken && (
          <>
            <Link to="signin/">{t("login")}</Link>
            <Link to="signup/">{t("register")}</Link>
          </>
        )}
        {authToken && (
          <>
            <Link to="logout/">{t("logout")}</Link>
              <Link to="profile/">
                {user?.username}
              </Link>
          </>
        )}
      </LinkContainer>
    </Nav>
  );
};

export default NavBar;
