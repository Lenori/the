import React from 'react';

import logo from 'assets/logo-the.jpg';

import * as S from './Header.styles';

export default function Header() {
    return (
        <S.MainContainer>
            <S.LogoContainer>
                <img src={logo} alt="thais-eleoterio-logo" />
            </S.LogoContainer>

            <S.MenuContainer>
                <S.MenuItem>Sobre mim</S.MenuItem>
                <S.MenuItem>Meus serviços</S.MenuItem>
                <S.MenuItem>Projetos</S.MenuItem>
                <S.MenuItem>Solicite um orçamento</S.MenuItem>
            </S.MenuContainer>
        </S.MainContainer>
    );
}
