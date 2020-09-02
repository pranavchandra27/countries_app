import React, { useState, useEffect } from "react";
import { Wrapper } from "./Home.styles";
import Countries from "./Countries";
import Search from "./Search";
import { withTheme } from "styled-components";
import { useCountriesData } from "../CountriesContext";
import Spinner from "./Spinner.jsx";
import { fetchCountries } from "../API";

const Home = ({ theme, history }) => {
  const { setCountries } = useCountriesData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountries().then(res => {
      setCountries(res);
      setLoading(false);
    });
  }, [setCountries]);

  return (
    <Wrapper theme={theme}>
      <div className='container'>
        {loading ? (
          <div className='spinner'>
            <Spinner />
          </div>
        ) : (
          <>
            <Search theme={theme} />
            <Countries history={history} />
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default withTheme(Home);
