import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import BulletImage from 'assets/home-image-b.jpg';

import * as S from './Bullets.styles';

export default function Bullets() {
    return (
        <S.MainContainer>
            <S.Description>
                <h3>Lorem ipsum dolor sit amet ipsum dolor sit!</h3>

                <p>
                    Lorem ipsum dolor sit amet ipsum dolor sit amet lorem ipsum
                    dolor sit amet ipsum dolor sit amet.
                </p>
            </S.Description>

            <S.BulletsMainContainer>
                <S.BulletsInfo>
                    <img src={BulletImage} alt="home-decor-image" />

                    <S.BulletsContainer>
                        <S.Bullet>
                            <FontAwesomeIcon icon={faArrowRight} />
                            <p>
                                Lorem ipsum dolor sit amet ipsum dolor sit amet
                                lorem ipsum dolor sit amet ipsum dolor sit amet
                                psum dolor sit amet psum dolor sit amet.
                            </p>
                        </S.Bullet>

                        <S.Bullet>
                            <FontAwesomeIcon icon={faArrowRight} />
                            <p>
                                Lorem ipsum dolor sit amet ipsum dolor sit amet
                                lorem ipsum dolor sit amet ipsum dolor sit amet
                                psum dolor sit amet psum dolor sit amet.
                            </p>
                        </S.Bullet>

                        <S.Bullet>
                            <FontAwesomeIcon icon={faArrowRight} />
                            <p>
                                Lorem ipsum dolor sit amet ipsum dolor sit amet
                                lorem ipsum dolor sit amet ipsum dolor sit amet
                                psum dolor sit amet psum dolor sit amet.
                            </p>
                        </S.Bullet>

                        <S.Bullet>
                            <FontAwesomeIcon icon={faArrowRight} />
                            <p>
                                Lorem ipsum dolor sit amet ipsum dolor sit amet
                                lorem ipsum dolor sit amet ipsum dolor sit amet
                                psum dolor sit amet psum dolor sit amet.
                            </p>
                        </S.Bullet>
                    </S.BulletsContainer>
                </S.BulletsInfo>
            </S.BulletsMainContainer>
        </S.MainContainer>
    );
}
