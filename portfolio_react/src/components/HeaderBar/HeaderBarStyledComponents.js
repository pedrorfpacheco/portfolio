import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";

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
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  @media screen and (max-width: 640px) {
    padding: 0 0;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({theme}) => theme.textPrimary};
  }
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;
  @media screen and (max-width: 768px){
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
  @media screen and (max-width: 640px){
    display: none;
  }
`;

export const GithubButton = styled.button`
  background-color: transparent;
  color: ${({theme}) => theme.white};
  padding: 0 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  height: 24px;
  width: 23px;
  align-items: center;
  transition: all 0.4s ease-in-out;
  border: none;
  border-radius:50%;
  :hover{
    color: ${({theme}) => theme.primary};
  }
`;

export const LinkedinButton = styled.button`
  background-color: transparent;
  color: ${({theme}) => theme.white};
  padding: 0 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
  height: 30px;
  width: 30px;
  align-items: center;
  border: none;
  transition: all 0.4s ease-in-out;
  margin-right: 30px;
  :hover{
    color: ${({theme}) => theme.primary};
  }
`;