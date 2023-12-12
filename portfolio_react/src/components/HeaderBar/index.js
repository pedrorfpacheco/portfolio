import React, {useContext} from "react";
import {
    ButtonContainer, MobileIcon, MobileLink, MobileMenu,
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
import LogoPedroPachecoWhite from "../../images/LogoPedroPachecoWhite.png";
import {Bio} from "../../data/constants";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {darkTheme} from "../../utils/Themes";
import {ThemeContext} from "styled-components";
import {FaBars} from "react-icons/fa";

const HeaderBar = ({onThemeToggle}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useContext(ThemeContext);

    return (
        <Nav>
            <NavContainer>
                <NavLogo to='/' onClick={() => window.scrollTo(0, 0)}>
                    {theme === darkTheme ?
                        <img src={LogoPedroPacheco} alt='hero-image' style={{height: '35px', width: '270px'}}/> :
                        <img src={LogoPedroPachecoWhite} alt='hero-image' style={{height: '35px', width: '270px'}}/>}
                </NavLogo>
                <MobileIcon>
                    <FaBars onClick={() => {
                        setIsOpen(!isOpen)
                    }} />
                </MobileIcon>
                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#education">Education</NavLink>
                    <NavLink href="#contacts">Contacts</NavLink>
                </NavItems>
                <ButtonContainer>
                    <SocialMediaIcon onClick={onThemeToggle}>
                        {theme === darkTheme ?
                            <LightModeIcon style={{width: '38px', height: '38px'}}/> :
                            <DarkModeIcon style={{width: '46px', height: '46px'}}/>}
                    </SocialMediaIcon>
                    <SocialMediaIcon href={Bio.linkedin} target='display'>
                        <LinkedInIcon style={{width: '45px', height: '45px'}}/>
                    </SocialMediaIcon>
                    <SocialMediaIcon href={Bio.github} target='display'>
                        <GitHubIcon style={{width: '37px', height: '37px'}}/>
                    </SocialMediaIcon>
                </ButtonContainer>
                {
                    isOpen &&
                    <MobileMenu isOpen={isOpen}>
                        <MobileLink href="#about" onClick={() => {
                            setIsOpen(!isOpen)
                        }}>About</MobileLink>
                        <MobileLink href='#experience' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Experience</MobileLink>
                        <MobileLink href='#education' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Education</MobileLink>
                        <MobileLink href='#contacts' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Contacts</MobileLink>
                        <MobileLink href={Bio.linkedin} onClick={() => {
                            setIsOpen(!isOpen)
                        }}>LinkedIn</MobileLink>
                        <MobileLink href={Bio.github} onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Github</MobileLink>
                        <SocialMediaIcon onClick={onThemeToggle}>
                            {theme === darkTheme ?
                                <LightModeIcon style={{width: '38px', height: '38px'}}/> :
                                <DarkModeIcon style={{width: '46px', height: '46px'}}/>}
                        </SocialMediaIcon>
                    </MobileMenu>
                }
            </NavContainer>
        </Nav>
    );
};

export default HeaderBar;
