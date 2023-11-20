import React from "react";
import {
    ButtonContainer,
    GithubButton,
    LinkedinButton,
    MobileIcon,
    Nav, NavContainer,
    NavItems, NavLink,
    NavLogo
} from "./HeaderBarStyledComponents";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
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
                    <LinkedinButton href={Bio.linkedin} target={Bio.linkedin}>
                        <LinkedInIcon style={{width:'45px', height: '45px'}}/>
                    </LinkedinButton>
                    <GithubButton href={Bio.github} target={Bio.github}>
                        <GitHubIcon style={{width:'37px', height: '37px'}}/>
                    </GithubButton>
                </ButtonContainer>
            </NavContainer>
        </Nav>
    );
};

export default HeaderBar;
