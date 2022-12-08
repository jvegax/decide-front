import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  CreateVotingLink,
  LinkContainer,
  NavBar as Nav,
} from "./styles";
import { useTranslation } from "react-i18next";
import logo from "../../assets/decide-logo.jpg";
import useDecide from "../../hooks/useDecide";
import LangMenu from "./LangMenu";

const NavBar = () => {
  const { t } = useTranslation();
  const { token, user } = useDecide();
  return (
    <Nav>
      <Link to="/">
        <img src={logo} alt="logo" width={190} />
      </Link>
      <LinkContainer>
        <LangMenu />
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
        {token && user?.is_staff && (
          <CreateVotingLink to="votacion/create">
            Crear votación
          </CreateVotingLink>
        )}
      </LinkContainer>
    </Nav>
  );
};

export default NavBar;
