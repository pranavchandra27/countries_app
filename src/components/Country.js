import React from "react";
import { Wrapper } from "./Country.styles";
import { withTheme } from "styled-components";

const Country = ({ country, theme, history }) => {
  const handleClick = name => {
    history.push(`/country/${name.toLowerCase()}`);
  };

  return (
    <Wrapper onClick={() => handleClick(country.alpha2Code)} theme={theme}>
      <img className='flag' src={country.flag} alt={country.name} />
      <div className='country'>
        <h1 className='name'>{country.name}</h1>
        <div className='country-info'>
          <p>
            <span>Population: </span>
            {country.population}
          </p>
          <p>
            <span>Region: </span>
            {country.region}
          </p>
          <p>
            <span>Capital: </span>
            {country.capital}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default withTheme(Country);
