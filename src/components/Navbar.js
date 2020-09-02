import React from "react";
import { Nav } from "./Navbar.styles";
import { withTheme } from "styled-components";
import { useCurrentTheme } from "../ThemeContext";

const Navbar = ({ theme }) => {
  const { isDarkMode, setDarkMode } = useCurrentTheme();
  return (
    <Nav theme={theme}>
      <div className='container'>
        <h1>Where in the world?</h1>
        <button
          className='theme-switch'
          onClick={() => setDarkMode(!isDarkMode)}>
          <span className='icon'>
            {isDarkMode ? (
              <ion-icon name='sunny-outline'></ion-icon>
            ) : (
              <ion-icon name='moon-outline'></ion-icon>
            )}
          </span>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </Nav>
  );
};

export default withTheme(Navbar);
