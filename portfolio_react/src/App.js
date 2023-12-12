import './App.css';
import styled, {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from "./utils/Themes";
import HeaderBar from "./components/HeaderBar";
import Hero from "./components/HeroSection";
import Experience from "./components/Experience";
import Education from "./components/Education";
import {BrowserRouter} from "react-router-dom";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import {useState} from "react";

const Body = styled.div`
  background-color: ${({theme}) => theme.background};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, ${({theme}) => theme.cardLight} 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(201, 32, 184, 0) 50%, ${({theme}) => theme.cardLight} 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`

function App() {
    const [currentTheme, setCurrentTheme] = useState(darkTheme);

    const toggleTheme = () => {
        setCurrentTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    return (
        <ThemeProvider theme={currentTheme}>
            <BrowserRouter>
                <HeaderBar onThemeToggle={toggleTheme}/>
                <Body>
                    <Hero/>
                    <Wrapper>
                        <Experience/>
                    </Wrapper>
                    <Wrapper>
                        <Education/>
                        <Contacts/>
                    </Wrapper>
                    <Footer/>
                </Body>
            </BrowserRouter>
        </ThemeProvider>

    );
}

export default App;
