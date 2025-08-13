import styled from 'styled-components';

export const MainContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Description = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--white);
    padding: var(--spacing-m) var(--spacing-s);
    text-align: center;

    h3 {
        font-weight: normal;
        font-family: 'Times New Roman';
        color: var(--main-green);
        font-size: 28px;
        margin: 0 0 var(--spacing-s) 0;
    }

    p {
        margin: 0;
    }

    @media screen and (min-width: 769px) {
        padding: var(--spacing-m);
    }
`;

export const BulletsMainContainer = styled.section`
    width: 100%;
    background-color: var(--main-green);
    color: var(--main-cream);
`;

export const BulletsInfo = styled.section`
    max-width: var(--max-width);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: var(--spacing-m) var(--spacing-s);
    margin: auto;

    img {
        width: 100%;
        border-radius: 20px;
        margin: 0 0 var(--spacing-m) 0;
    }

    @media screen and (min-width: 769px) {
        padding: var(--spacing-m);
    }

    @media screen and (min-width: 1070px) {
        align-items: flex-start;
        flex-direction: row;

        img {
            width: 650px;
            margin: 0 var(--spacing-m) 0 0;
        }
    }
`;

export const BulletsContainer = styled.section`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    @media screen and (min-width: 1070px) {
        max-width: 600px;
    }
`;

export const Bullet = styled.section`
    display: flex;
    align-items: flex-start;
    margin-bottom: var(--spacing-sm);

    &:last-child {
        margin-bottom: 0;
    }

    svg {
        margin-right: var(--spacing-s);
    }

    p {
        font-size: 16px;
        margin: 0;
    }
`;
