import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Background, Main, SectionLeft, SectionRight, Button, P, Span, Img } from "./styled";

import BackgroundImg from "../../assets/backgroundHome.svg"
import Photo from "../../assets/image.svg"

import { HiArrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <Container >
            <Background>
                <img src={BackgroundImg} alt="home.png" />
            </Background>
            <Main>
                <SectionLeft>
                    <P>
                        Venha fazer parte do fã clube oficial “Tião Carreiro & Pardinho”.
                        Aqui você pode criar sua playlist com suas canções prediletas dessa dupla maravilhosa.
                    </P>
                    <Link to="/create-playlist">
                        <Button>
                            Descubra
                            <HiArrowRight />
                        </Button>
                    </Link>

                </SectionLeft>
                <SectionRight>
                    <Img src={Photo} alt="image.svg" />
                    <Span>Tião Carreiro & Pardinho</Span>
                </SectionRight>
            </Main>
        </Container>
    );
}

export default Home;
