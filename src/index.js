import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";
import { CountriesProvider } from "./CountriesContext";

ReactDOM.render(
  <React.StrictMode>
    <CountriesProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CountriesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
