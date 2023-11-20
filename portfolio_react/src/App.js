import './App.css';
import styled, {ThemeProvider} from 'styled-components';
import {darkTheme} from "./utils/Themes";
import HeaderBar from "./components/HeaderBar";
import Hero from "./components/HeroSection";
import Experience from "./components/Experience";
import Education from "./components/Education";
import {BrowserRouter} from "react-router-dom";

const Body = styled.div`
  background-color: ${({theme}) => theme.background};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg,
  rgba(4, 37, 48, 255) 0%,
  rgba(201, 32, 184, 0) 50%),
  linear-gradient(141.27deg,
  rgba(0, 70, 209, 0) 50%,
  rgba(4, 37, 48, 255) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`

function App() {

    return (
        <ThemeProvider theme={darkTheme}>
            <BrowserRouter>
                <HeaderBar/>
                <Body>
                    <Hero/>
                    <Wrapper>
                        <Experience/>
                        <Education/>
                    </Wrapper>
                </Body>
            </BrowserRouter>
        </ThemeProvider>

    );
}

export default App;
