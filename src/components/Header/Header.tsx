import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import logo from 'assets/logo-the.jpg';

import * as S from './Header.styles';

export default function Header() {
    const [shouldShowHiddenMenu, setShouldShowHiddenMenu] =
        useState<boolean>(false);

    return (
        <S.MainContainer>
            <S.LogoContainer>
                <img src={logo} alt="thais-eleoterio-logo" />
            </S.LogoContainer>

            <S.HamburgerMenu onClick={() => setShouldShowHiddenMenu(true)}>
                <FontAwesomeIcon icon={faBars} />
            </S.HamburgerMenu>

            {shouldShowHiddenMenu && (
                <S.DrawerMenuContainer>
                    <S.DrawerMenuClose
                        onClick={() => setShouldShowHiddenMenu(false)}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </S.DrawerMenuClose>

                    <S.DrawerMenuItem>Sobre mim</S.DrawerMenuItem>
                    <S.DrawerMenuItem>Meus serviços</S.DrawerMenuItem>
                    <S.DrawerMenuItem>Projetos</S.DrawerMenuItem>
                    <S.DrawerMenuItem>Solicite um orçamento</S.DrawerMenuItem>
                </S.DrawerMenuContainer>
            )}

            <S.MenuContainer>
                <S.MenuItem>Sobre mim</S.MenuItem>
                <S.MenuItem>Meus serviços</S.MenuItem>
                <S.MenuItem>Projetos</S.MenuItem>
                <S.MenuItem>Solicite um orçamento</S.MenuItem>
            </S.MenuContainer>
        </S.MainContainer>
    );
}
