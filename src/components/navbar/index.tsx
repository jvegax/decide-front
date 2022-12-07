import React from 'react'
import { Link } from 'react-router-dom';
import { Button,LinkContainer, NavBar as Nav, Title } from './styles';
import {useTranslation} from "react-i18next";
import logo from '../../assets/decide-logo.jpg';

function languageButtons() {
    const { i18n } = useTranslation();
    return (

        <div>
            <Button hidden={i18n.language == 'en_US'} onClick={() => i18n.changeLanguage('en_US')}>🇺🇸</Button>
            <Button hidden={i18n.language == 'es_ES'} onClick={() => i18n.changeLanguage('es_ES')}>🇪🇸</Button>
            <Button hidden={i18n.language == 'de_DE'} onClick={() => i18n.changeLanguage('de_DE')}>🇩🇪</Button>
            <Button hidden={i18n.language == 'se_SV'} onClick={() => i18n.changeLanguage('se_SV')}>🇸🇪</Button>
        </div>
    )
}

const NavBar = () => {
    const { t } = useTranslation();
  return (
    <Nav>
        <img src={logo} alt="logo" width={140} />
        <LinkContainer>
            {languageButtons()}
            <Link to="/">{t('voting')}</Link>
            <Link to='signin/'>{t('login')}</Link>
            <Link to="signup/">{t('register')}</Link>
            <Link to="logout/">{t('logout')}</Link>

        </LinkContainer>
    </Nav>
  )
}

export default NavBar;