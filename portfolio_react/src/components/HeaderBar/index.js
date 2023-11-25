import React, {useContext} from "react";
import {
    ButtonContainer,
    Nav,
    NavContainer,
    NavItems,
    NavLink,
    NavLogo,
    SocialMediaIcon
} from "./HeaderBarStyledComponents";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoPedroPacheco from "../../images/LogoPedroPacheco.png";
import {Bio} from "../../data/constants";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {darkTheme} from "../../utils/Themes";
import {ThemeContext} from "styled-components";

const HeaderBar = ({onThemeToggle}) => {
    const theme = useContext(ThemeContext);

    return (
        <Nav>
            <NavContainer>
                <NavLogo to='/'>
                    <img src={LogoPedroPacheco} alt='hero-image' style={{height: '80px', width: '270px'}}/>
                </NavLogo>
                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#education">Education</NavLink>
                    <NavLink href="#contacts">Contacts</NavLink>
                </NavItems>
                <ButtonContainer>
                    <SocialMediaIcon onClick={onThemeToggle}>
                        {theme === darkTheme ? <LightModeIcon style={{width: '38px', height: '38px'}}/> :
                            <DarkModeIcon style={{width: '46px', height: '46px'}}/>}
                    </SocialMediaIcon>
                    <SocialMediaIcon href={Bio.linkedin} target='display'>
                        <LinkedInIcon style={{width: '45px', height: '45px'}}/>
                    </SocialMediaIcon>
                    <SocialMediaIcon href={Bio.github} target='display'>
                        <GitHubIcon style={{width: '37px', height: '37px'}}/>
                    </SocialMediaIcon>
                </ButtonContainer>
            </NavContainer>
        </Nav>
    );
};

export default HeaderBar;
