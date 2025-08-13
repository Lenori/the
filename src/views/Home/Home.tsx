import React from 'react';

import Header from 'components/Header/Header';
import Bullets from 'components/Bullets/Bullets';

import HomepageImage from 'assets/home-image-a.jpg';

import * as S from './Home.styles';

export default function Home() {
    return (
        <S.HomeContainer>
            <S.MainContainer>
                <Header />

                <S.TitleContainer>
                    <S.TitleSection>
                        <S.Title>
                            Lorem ipsum dolor sit amet ipsum dolor sit!
                        </S.Title>

                        <S.Subtitle>
                            Lorem ipsum dolor sit amet ipsum dolor sit amet
                            lorem ipsum dolor sit amet ipsum dolor sit amet.
                        </S.Subtitle>

                        <button>projetos</button>
                    </S.TitleSection>

                    <S.TitleImage>
                        <img src={HomepageImage} alt="interior-design-image" />
                    </S.TitleImage>
                </S.TitleContainer>
            </S.MainContainer>

            <Bullets />
        </S.HomeContainer>
    );
}
