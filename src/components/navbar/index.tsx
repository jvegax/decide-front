import React from 'react'
import { Link } from 'react-router-dom';
import { Button,LinkContainer, NavBar as Nav, Title } from './styles';
import {useTranslation} from "react-i18next";
import languages from "../../i18n/languages";

function languageButtons() {
    const { i18n } = useTranslation();
    return (

        <div>
            <Button hidden={i18n.language == 'en_US'} onClick={() => i18n.changeLanguage('en_US')}>🇺🇸</Button>
            <Button hidden={i18n.language == 'es_ES'} onClick={() => i18n.changeLanguage('es_ES')}>🇪🇸</Button>
        </div>
    )
}

const NavBar = () => {
    const { t } = useTranslation();
  return (
    <Nav>
        <Title>Decide 🫵</Title>
        <LinkContainer>
            {languageButtons()}
            <Link to="/">{t('voting')}</Link>
            <Link to='signin/'>{t('login')}</Link>
            <Link to="signup/">{t('register')}</Link>

        </LinkContainer>
    </Nav>
  )
}

export default NavBar;