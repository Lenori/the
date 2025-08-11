import styled from 'styled-components';

export const MainContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoContainer = styled.section`
    img {
        width: 320px;
    }
`;

export const MenuContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const MenuItem = styled.p`
    color: var(--main-green);
    margin: 0 0 0 var(--spacing-m);
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        border-bottom: 1px solid var(--main-yellow);
    }

    &:last-child {
        color: var(--main-cream);
        background-color: var(--main-green);
        padding: var(--spacing-s);
        border-radius: 20px;
        transition: filter 0.3s;

        &:hover {
            filter: brightness(90%);
            border-bottom: none;
        }
    }
`;
