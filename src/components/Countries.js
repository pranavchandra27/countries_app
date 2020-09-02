import React from "react";
import Country from "./Country";
import { Wrapper } from "./Countries.styles";
import { useCountriesData } from "../CountriesContext";

const Countries = ({ history }) => {
  const { countries } = useCountriesData();

  return (
    <Wrapper>
      <div className='grid'>
        {countries.map(country => (
          <Country history={history} key={country.name} country={country} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Countries;
