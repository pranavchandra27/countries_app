import axios from "axios";

const API_URL = "https://restcountries.eu/rest/v2";

export const fetchCountries = async () => {
  const { data } = await axios(`${API_URL}/all`);
  return data;
};

export const serchedCountries = async name => {
  const { data } = await axios(`${API_URL}/name/${name}`);

  return data;
};

export const fetchRegion = async region => {
  const { data } = await axios(`${API_URL}/region/${region}`);

  return data;
};

export const fetchCountryInfo = async code => {
  const { data } = await axios(`${API_URL}/alpha/${code}`);

  return data;
};
