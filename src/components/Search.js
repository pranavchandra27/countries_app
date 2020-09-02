import React, { useState } from "react";
import { Wrapper } from "./Search.styles";
import { serchedCountries, fetchRegion, fetchCountries } from "../API";
import { useCountriesData } from "../CountriesContext";

const Search = ({ theme }) => {
  const [value, setValue] = useState("");
  const [selectValue, setSelectValue] = useState("all");
  const { setCountries } = useCountriesData();

  const handleChange = e => {
    setValue(e.target.value);
    serchedCountries(value).then(res => setCountries(res));
    setSelectValue("all");
  };

  const handleSelect = e => {
    setSelectValue(e.target.value);
    if (e.target.value === "all") {
      fetchCountries().then(res => setCountries(res));
    } else {
      fetchRegion(e.target.value).then(res => setCountries(res));
    }
  };

  return (
    <Wrapper theme={theme}>
      <form>
        <span>
          <ion-icon name='search-outline'></ion-icon>
        </span>
        <input
          value={value}
          onChange={handleChange}
          type='text'
          placeholder='Search for a country...'
        />
      </form>
      <select value={selectValue} onChange={handleSelect}>
        <option value='all'>All region</option>
        <option value='africa'>Africa</option>
        <option value='asia'>Asia</option>
        <option value='americas'>Americas</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
      </select>
    </Wrapper>
  );
};

export default Search;
