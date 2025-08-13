import styled from 'styled-components';

export const MainContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoContainer = styled.section`
    img {
        width: 100%;
    }

    @media screen and (min-width: 769px) {
        img {
            width: 320px;
        }
    }
`;

export const HamburgerMenu = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;

    svg {
        font-size: 30px;
        margin-left: var(--spacing-s);
        color: var(--main-green);
        cursor: pointer;
        padding: var(--spacing-s);
    }

    @media screen and (min-width: 769px) {
        display: none;
    }
`;

export const DrawerMenuContainer = styled.section`
    width: 73%;
    height: 100vh;
    background-color: var(--main-green);
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: var(--spacing-s);
`;

export const DrawerMenuClose = styled.section`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

    svg {
        color: var(--main-cream);
        font-size: 25px;
        padding: var(--spacing-xs);
        cursor: pointer;
    }
`;

export const DrawerMenuItem = styled.p`
    color: var(--main-cream);
    margin: 0 0 var(--spacing-m) 0;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;

    &:last-child {
        color: var(--main-green);
        background-color: var(--main-cream);
        padding: var(--spacing-xs) var(--spacing-s);
        border-radius: 30px;
        transition: filter 0.3s;

        &:hover {
            filter: brightness(90%);
            border-bottom: none;
        }
    }
`;

export const MenuContainer = styled.section`
    display: none;
    align-items: center;
    justify-content: flex-end;

    @media screen and (min-width: 769px) {
        display: flex;
    }
`;

export const MenuItem = styled.p`
    color: var(--main-green);
    margin: 0 0 0 var(--spacing-m);
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    font-size: 12px;

    &:hover {
        border-bottom: 1px solid var(--main-yellow);
    }

    &:last-child {
        color: var(--main-cream);
        background-color: var(--main-green);
        padding: var(--spacing-xs) var(--spacing-s);
        border-radius: 30px;
        transition: filter 0.3s;

        &:hover {
            filter: brightness(90%);
            border-bottom: none;
        }
    }
`;
