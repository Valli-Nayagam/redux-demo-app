import logo from './logo.svg';
import './App.css';
import Mainpage from './components/Mainpage';
import { Provider } from 'react-redux'
import store from './redux/store'
import Table from './components/Table';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './components/Theme'

const StyledApp = styled.div`

color: ${(props) => props.theme.fontColor}

`

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <div className="App container m-2">
            <div className="custom-control custom-switch ml-2">
              <label className="switch">
                <input onClick={() => themeToggler()} type="checkbox" />
                <span className="slider round"></span>
              </label>
              {/* <input onClick={() => themeToggler()} type="checkbox" className="custom-control-input" id="customSwitch" /> */}
              <label className="custom-control-label" for="customSwitch"><b>Dark Theme</b></label>
            </div>
            <h3 className="ml-2">React-Redux</h3>
            <Mainpage></Mainpage>
            <h3 className="ml-2">React-AgGrid</h3>
            <Table></Table>
          </div>
        </StyledApp>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
