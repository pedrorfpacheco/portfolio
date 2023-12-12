import React from "react";
import {
    Banner,
    BannerVariants,
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
                        <Banner variants={BannerVariants} animate="animationOne">
                            <Img src={PerfilPedroPacheco} alt='Hero'/>
                        </Banner>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default Hero;