import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Navbar, CountryInfo } from "./components";

import { GlobalStyles } from "./App.styles";
import { ThemeProvider } from "styled-components";
import { useCurrentTheme } from "./ThemeContext";

const App = () => {
  const { currentTheme } = useCurrentTheme();

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/country/:code' component={CountryInfo} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
