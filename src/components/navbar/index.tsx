import React from "react";
import { Link } from "react-router-dom";
import { Button, LinkContainer, NavBar as Nav } from "./styles";
import { useTranslation } from "react-i18next";
import logo from "../../assets/decide-logo.jpg";
import useDecide from "../../hooks/useDecide";

function languageButtons() {
  const { i18n } = useTranslation();
  return (
    <select
      onChange={(event) => i18n.changeLanguage(event.target.value)}
    >
      <option value="en_US" hidden={i18n.language == "en_US"}>🇺🇸</option>
      <option value="es_ES" hidden={i18n.language == "es_ES"}>🇪🇸</option>
      <option value="de_DE" hidden={i18n.language == "de_DE"}>🇩🇪</option>
      <option value="se_SV" hidden={i18n.language == "se_SV"}>🇸🇪</option>
    </select>
  );
}

const NavBar = () => {
  const { t } = useTranslation();
  const { token } = useDecide();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return (
    <Nav>
      <Link to="/">
        <img src={logo} alt="logo" width={190} />
      </Link>
      <LinkContainer>
        {languageButtons()}
        <Link to="/">{t("voting")}</Link>
        {!token && (
          <>
            <Link to="signin/">{t("login")}</Link>
            <Link to="signup/">{t("register")}</Link>
          </>
        )}
        {token && (
          <>
            <Link to="logout/">{t("logout")}</Link>
            <Link to="profile/">{user?.username}</Link>
          </>
        )}
      </LinkContainer>
    </Nav>
  );
};

export default NavBar;
