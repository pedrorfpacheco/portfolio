import React from "react";
import {
    ButtonContainer,
    MobileIcon,
    Nav,
    NavContainer,
    NavItems,
    NavLink,
    NavLogo,
    SocialMediaIcon
} from "./HeaderBarStyledComponents";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import LogoPedroPacheco from "../../images/LogoPedroPacheco.png";
import {Bio} from "../../data/constants";

const HeaderBar = () => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo to='/'>
                    <img src={LogoPedroPacheco} alt='hero-image' style={{height: '80px', width: '270px'}}/>
                </NavLogo>
                <MobileIcon></MobileIcon>
                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#education">Education</NavLink>
                    <NavLink href="#contacts">Contacts</NavLink>
                </NavItems>
                <ButtonContainer>
                    <SocialMediaIcon href={Bio.linkedin} target='display'>
                        <LinkedInIcon style={{width:'45px', height: '45px'}}/>
                    </SocialMediaIcon>
                    <SocialMediaIcon href={Bio.github} target='display'>
                        <GitHubIcon style={{width:'37px', height: '37px'}}/>
                    </SocialMediaIcon>
                </ButtonContainer>
            </NavContainer>
        </Nav>
    );
};

export default HeaderBar;
