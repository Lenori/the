import styled from 'styled-components';

export const MainContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: var(--spacing-m);
`;

export const TitleContainer = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: var(--spacing-l);
`;

export const TitleSection = styled.section`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    button {
        margin-top: var(--spacing-m);
    }
`;

export const Title = styled.p`
    font-family: 'Times New Roman';
    color: var(--main-green);
    font-size: 35px;
    margin: 0;
`;

export const Subtitle = styled.p`
    color: var(--dark-grey);
    font-size: 18px;
    margin-top: var(--spacing-m);
`;

export const TitleImage = styled.section`
    img {
        width: 500px;
        border-radius: 25px;
        margin-left: var(--spacing-m);
    }
`;
