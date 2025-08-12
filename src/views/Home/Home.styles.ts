import styled from 'styled-components';

export const MainContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: var(--spacing-m);
    max-width: var(--max-width);
    margin: auto;
`;

export const TitleContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-top: var(--spacing-l);

    @media screen and (min-width: 769px) {
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: row;
    }
`;

export const TitleSection = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: var(--spacing-l);

    button {
        margin-top: var(--spacing-m);
    }

    @media screen and (min-width: 769px) {
        align-items: flex-start;
        margin-bottom: unset;
    }
`;

export const Title = styled.p`
    font-family: 'Times New Roman';
    color: var(--main-green);
    font-size: 35px;
    margin: 0;
    text-align: center;

    @media screen and (min-width: 769px) {
        text-align: left;
    }
`;

export const Subtitle = styled.p`
    color: var(--dark-grey);
    font-size: 18px;
    margin-top: var(--spacing-m);
    text-align: center;

    @media screen and (min-width: 769px) {
        text-align: left;
    }
`;

export const TitleImage = styled.section`
    img {
        width: 100%;
        border-radius: 25px;
        margin-left: 0;

        @media screen and (min-width: 769px) {
            width: 500px;
            margin-left: var(--spacing-m);
        }

        @media screen and (min-width: 1051px) {
            width: 650px;
        }

        @media screen and (min-width: 1441px) {
            width: 800px;
        }
    }
`;
