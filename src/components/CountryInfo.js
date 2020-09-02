import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchCountryInfo } from "../API";
import { withTheme } from "styled-components";
import { Wrapper } from "./CountryInfo.styles";
import Spinner from "./Spinner";

const CountryInfo = ({ theme }) => {
  const { code } = useParams();
  const { goBack } = useHistory();
  const [country, setCountryInfo] = useState(undefined);

  useEffect(() => {
    fetchCountryInfo(code).then(res => setCountryInfo(res));
  }, [code]);

  return (
    <Wrapper>
      <div className='container'>
        <button className='go_back' onClick={() => goBack()}>
          <span>&larr;</span> Back
        </button>
        {!country ? (
          <Spinner />
        ) : (
          <div className='country'>
            <div className='flag'>
              <img src={country.flag} alt={country.name} />
            </div>
            <div className='country_info'>
              <h2 className='name'>{country.name}</h2>
              <div className='details'>
                <div className='region_details'>
                  <p>
                    <span>Native Name:</span> {country.nativeName}
                  </p>
                  <p>
                    <span>Population:</span> {country.population}
                  </p>
                  <p>
                    <span>Region:</span> {country.region}
                  </p>
                  <p>
                    <span>Sub Region:</span> {country.subregion}
                  </p>
                  <p>
                    <span>Capital:</span> {country.capital}
                  </p>
                </div>
                <div className='region_details'>
                  <p>
                    <span>Top Level Domain:</span> {country.topLevelDomain}
                  </p>
                  <p>
                    <span>Currency:</span> {country.currencies[0].name}
                  </p>
                  <p>
                    <span>Language:</span> {country.languages[0].name}
                  </p>
                </div>
              </div>
              <div className='borders'>
                <span className='title'>Border Countries: </span>
                {!country.borders.length ? (
                  <span className='border'>Has no border</span>
                ) : (
                  country.borders.map((border, i) => (
                    <span className='border' key={i}>
                      {border}
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default withTheme(CountryInfo);
