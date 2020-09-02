import React, { createContext, useState, useContext } from "react";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  return (
    <CountriesContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountriesData = () => useContext(CountriesContext);
