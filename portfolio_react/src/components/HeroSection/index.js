import React from "react";
import {
    HeroBg,
    HeroContainer,
    HeroInnerContainer,
    HeroLeftContainer,
    HeroRightContainer,
    Img,
    ResumeButton,
    Span,
    SubTitle,
    TextLoop,
    Title
} from "./HeroStyle";
import {Bio} from "../../data/constants";
import Typewriter from 'typewriter-effect';
import PerfilPedroPacheco from "../../images/PerfilPedroPacheco.jpg";

const Hero = () => {
    return (
        <div id='about'>
            <HeroContainer>
                <HeroBg>
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <Title>Hi, I am <br/>
                            {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true
                                    }}/>
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='_blank'>Check CV</ResumeButton>
                    </HeroLeftContainer>
                    <HeroRightContainer>
                        <Img src={PerfilPedroPacheco} alt='Hero'/>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default Hero;