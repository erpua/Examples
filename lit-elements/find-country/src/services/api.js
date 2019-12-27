const fetchAndLogCountries = async () => {
  const response = await fetch("https://restcountries.eu/rest/v2/");
  const json = await response.json();
  console.log(json);
};

export { fetchAndLogCountries };
