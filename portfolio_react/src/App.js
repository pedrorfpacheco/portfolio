import './App.css';
import styled, {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from "./utils/Themes";
import {useState} from "react";

const Body = styled.div`
  background-color: ${({theme}) => theme.background};
  width: 100%;
  overflow-x: hidden;
`

function App() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}><Body>
            Hello
        </Body></ThemeProvider>

    );
}

export default App;
