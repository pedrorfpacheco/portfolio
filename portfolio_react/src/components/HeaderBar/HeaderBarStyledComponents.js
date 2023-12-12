import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";
import {darkTheme} from "../../utils/Themes";

export const Nav = styled.div`
  background-color: ${({theme}) => theme.cardLight};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1600px;
`;

export const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  @media screen and (max-width: 380px) {
    display: none;
  }
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({theme}) => theme.textPrimary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({theme}) => theme.primary};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SocialMediaIcon = styled.a`
  background-color: transparent;
  color: ${({theme}) => theme.textPrimary};
  padding: 0 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
  height: 24px;
  width: 23px;
  align-items: center;
  border: none;
  transition: all 0.4s ease-in-out;
  margin-right: 30px;

  :hover {
    color: ${({theme}) => theme.primary};
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -1px;
    right: 10px;
    transform: translate(-100%, 50%);
    font-size: 2rem;
    cursor: pointer;
    color: ${() => darkTheme.textPrimary};
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({theme}) => theme.cardLight};
  transition: all 0.6s ease-in-out;
  transform: ${({isOpen}) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({isOpen}) => (isOpen ? '98%' : '0')};
  z-index: ${({isOpen}) => (isOpen ? '1000' : '-1000')};
`

export  const MobileLink = styled.a`
  color: ${({theme}) => theme.textPrimary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  :hover {
    color: ${({theme}) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({theme}) => theme.primary};
  }
`;